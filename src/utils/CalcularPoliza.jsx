export function calcularPoliza(costoM2, factorPropiedad, factorUbicacion, metros2) {
  return (costoM2 * factorPropiedad * factorUbicacion * metros2).toFixed(2);
}
