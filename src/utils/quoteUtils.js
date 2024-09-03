export const getTotalEfficiency = (quote) => {
  const facadesEfficiency = quote.simulation.facades.reduce(
    (acc, facade) => acc + facade.efficiency,
    0,
  );
  const roofsEfficiency = quote.simulation.roofs.reduce(
    (acc, roof) => acc + roof.efficiency,
    0,
  );
  return facadesEfficiency + roofsEfficiency;
};
