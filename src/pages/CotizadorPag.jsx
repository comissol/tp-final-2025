import { useState } from "react";
import Formulario from "../components/Formulario";
import Resultado from "../components/Resultado";
import { calcularPoliza } from "../utils/CalcularPoliza";
import { Link } from "react-router-dom";

export default function CotizadorPag() {

const costoM2 = 351.86;

  const [form, setForm] = useState({
    propiedad: "",
    ubicacion: "",
    metros2: ""
  });

  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

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
    const nuevaCotizacion = {
      fechaCotizacion: new Date().toLocaleString(),
      propiedad: form.propiedad,
      ubicacion: form.ubicacion,
      metros2: form.metros2,
      poliza: resultado
    };

    const historial =
      JSON.parse(localStorage.getItem("historialCotizaciones")) || [];

    localStorage.setItem(
      "historialCotizaciones",
      JSON.stringify([...historial, nuevaCotizacion])
    );
  };
  

  return (
    
    <section>
      <div className="container2">
        <h1>Seguros para el hogar 🏡</h1>
        <Link to="/historial" className="icono">🗒️Ver historial</Link>
        
     </div>

      <div className="formulario">

        <Formulario
          form={form}
          setForm={setForm}
          cotizar={cotizar}
        />

        <Resultado
          loading={loading}
          resultado={resultado}
          guardarHistorial={guardarHistorial}
        />

      </div>
    </section>
  );
  }