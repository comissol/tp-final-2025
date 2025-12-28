export default function Historial({ historial }) {


  if (historial.length === 0) return <p>No hay historial aún.</p>;

  return (
    <table className="historial">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Propiedad</th>
          <th>Ubicación</th>
          <th>M2</th>
          <th>Póliza</th>
        </tr>
      </thead>

      <tbody>
        {historial.map((fila, index) => (
          <tr key={index}>
            <td>{fila.fechaCotizacion}</td>
            <td>{fila.propiedad}</td>
            <td>{fila.ubicacion}</td>
            <td>{fila.metros2}</td>
            <td>$ {fila.poliza}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
