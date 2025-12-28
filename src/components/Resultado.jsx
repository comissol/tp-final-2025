export default function Resultado({ loading, resultado, guardarHistorial }) {
  
  if (loading) return <p className="cargando">Cargando cotización...</p>;
  if (!resultado) return null;

  return (
    <div className="resultado">
      <h2>Resultado de la cotización</h2>
      <p>Valor final: <strong>${resultado}</strong></p>
      <button onClick={guardarHistorial}>Guardar en historial</button>
    </div>
  );
}

