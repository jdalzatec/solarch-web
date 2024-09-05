import moment from "moment";

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

export const getTotalSavings = (quote) => {
  return getTotalEfficiency(quote) * quote.simulation.pricing.kwh;
};

export const getTotalPricing = (quote) => {
  const facadesPricing = quote.simulation.facades.reduce(
    (acc, facade) => acc + facade.pricing,
    0,
  );
  const roofsPricing = quote.simulation.roofs.reduce(
    (acc, roof) => acc + roof.pricing,
    0,
  );
  return facadesPricing + roofsPricing;
};

export const getTotalPanelsByMaterial = (quote) => {
  const materials = {};
  quote.simulation.facades.forEach((facade, index) => {
    const material = quote.info.facades[index].material;
    materials[material] = (materials[material] || 0) + facade.number_of_panels;
  });
  quote.simulation.roofs.forEach((roof, index) => {
    const material = quote.info.roofs[index].material;
    materials[material] = (materials[material] || 0) + roof.number_of_panels;
  });
  return materials;
};

export const getTimeToPayback = (quote) => {
  const years = getTotalPricing(quote) / getTotalSavings(quote);
  const duration = moment.duration(years, "years");
  return duration.humanize(true);
};

export const getROIOverYears = (quote, years) => {
  const totalSavingsAYear = getTotalSavings(quote);
  const totalSavings = totalSavingsAYear * years;
  const totalPricing = getTotalPricing(quote);
  const roi = ((totalSavings - totalPricing) * 100) / totalPricing;
  return roi.toFixed(2);
};
