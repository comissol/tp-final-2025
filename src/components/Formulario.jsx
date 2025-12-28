import datos from "../data/datos.json";

export default function Formulario({ form, setForm, cotizar }) {

  const propiedades = datos.filter(d => d.categoria === "propiedad");
  const ubicaciones = datos.filter(d => d.categoria === "ubicacion");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    cotizar();
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Completa los datos solicitados para cotizar</h2>
      
      {/* SELECTOR DE PROPIEDAD */}
      <label>Tipo de Propiedad</label>
      <select name="propiedad" value={form.propiedad} onChange={handleChange}>
        <option value="">Seleccionar...</option>
        {propiedades.map(p => (
          <option key={p.tipo} value={p.factor}>{p.tipo}</option>
        ))}
      </select>

      {/* SELECTOR DE UBICACION */}
      <label>Ubicación</label>
      <select name="ubicacion" value={form.ubicacion} onChange={handleChange}>
        <option value="">Seleccionar...</option>
        {ubicaciones.map(u => (
          <option key={u.tipo} value={u.factor}>{u.tipo}</option>
        ))}
      </select>

      {/* INPUT METROS */}
      <label>Metros cuadrados</label>
      <input
        type="number"
        min="20"
        name="metros2"
        value={form.metros2}
        onChange={handleChange}
      />
      <div>
      <button type="submit">Cotizar</button>
      </div>
    </form>
  );
}
