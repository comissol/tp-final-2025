import { Routes, Route, Navigate } from "react-router-dom";
import CotizadorPag from "./pages/CotizadorPag";
import HistorialPagina from "./pages/HistorialPagina";

export default function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<CotizadorPag />} />
        <Route path="/historial" element={<HistorialPagina />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
