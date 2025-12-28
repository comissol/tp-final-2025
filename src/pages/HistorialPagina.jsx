import Historial from "../components/Historial";
import { Link } from "react-router-dom";

export default function HistorialPagina () {
  const historial = JSON.parse(localStorage.getItem("historialCotizaciones")) || [];

  return (
    <div className="container">

      <div style={{ marginBottom: "20px" }}>
        <Link to="/" className="icono2">⬅ Volver al cotizador</Link>
      </div>

      <h1>Historial de cotizaciones</h1>

      <Historial historial={historial} className="histoCotiz"/>

    </div>
  );
}