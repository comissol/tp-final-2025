import { useState } from "react";
import { calcularPoliza } from "../utils/CalcularPoliza";

export default function Cotizador () {

  const costoM2 = 351.86;

  const [form, setForm] = useState({
    propiedad: "",
    ubicacion: "",
    metros2: ""
  });

  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [historial, setHistorial] = useState(
    JSON.parse(localStorage.getItem("historialCotizaciones")) || []
  );
  const cotizar = () => {
        if (!form.propiedad || !form.ubicacion || form.metros2 < 20) {
      alert("Debes completar todos los datos.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const valor = calcularPoliza(
        costoM2,
        form.propiedad,
        form.ubicacion,
        form.metros2
      );

      setResultado(valor);
      setLoading(false);
    }, 1500);
  };

  const guardarHistorial = () => {
    const nuevaEntrada = {
      fechaCotizacion: new Date().toLocaleString(),
      propiedad: form.propiedad,
      ubicacion: form.ubicacion,
      metros2: form.metros2,
      poliza: resultado
    };

    const nuevoHistorial = [...historial, nuevaEntrada];

    setHistorial(nuevoHistorial);
    localStorage.setItem("historialCotizaciones", JSON.stringify(nuevoHistorial));
  };

  return { 
    form, 
    setForm, 
    resultado, 
    loading, 
    historial, 
    cotizar, 
    guardarHistorial 
  };
}
