import {
  Box,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  getROIOverYears,
  getTimeToPayback,
  getTotalEfficiency,
  getTotalPanelsByMaterial,
  getTotalPricing,
  getTotalSavings,
} from "../../utils/quoteUtils.js";
import { humanize } from "../../utils/stringUtils.js";
import { toCurrency, toNumerical } from "../../utils/numberUtils.js";

const QuoteSimulation = ({ quote }) => {
  if (!quote) return null;

  return (
    <Stack
      spacing={4}
      sx={{
        mb: 5,
      }}
    >
      <Typography variant="h6">Simulation</Typography>

      <Typography>
        The project will pay back {getTimeToPayback(quote)}.
      </Typography>
      <Typography>
        The ROI over the first year is {getROIOverYears(quote, 1)}%.
      </Typography>
      <Typography>
        The ROI over the first 5 years is {getROIOverYears(quote, 5)}%.
      </Typography>

      <Typography>
        Based on the provided city and country, the simulation located the
        project in the following coordinates:
      </Typography>
      <ul>
        <li>Latitude: {quote.simulation.location.latitude}</li>
        <li>Longitude: {quote.simulation.location.longitude}</li>
      </ul>

      <Typography>
        The simulation is based on the following pricing and materials:
      </Typography>
      <Box
        sx={{
          overflowX: "auto",
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}>KWH</TableCell>
              <TableCell
                colSpan={Object.keys(quote.simulation.pricing.materials).length}
                align="center"
              >
                Materials
              </TableCell>
            </TableRow>
            <TableRow>
              {Object.keys(quote.simulation.pricing.materials).map(
                (material) => (
                  <TableCell key={material}>{humanize(material)}</TableCell>
                ),
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Pricing</TableCell>
              <TableCell>{toCurrency(quote.simulation.pricing.kwh)}</TableCell>
              {Object.entries(quote.simulation.pricing.materials).map(
                ([material, price]) => (
                  <TableCell key={material}>{toCurrency(price)}</TableCell>
                ),
              )}
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      <Divider />

      <Box
        sx={{
          overflowX: "auto",
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Num. of panels</TableCell>
              <TableCell>Pricing</TableCell>
              <TableCell>KWH/Year</TableCell>
              <TableCell>Savings / Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quote.simulation.facades.map((facade, index) => (
              <TableRow key={index}>
                <TableCell>Facade {index + 1}</TableCell>
                <TableCell>
                  {facade.number_of_panels} (
                  {humanize(quote.info.facades[index].material)})
                </TableCell>
                <TableCell>{toCurrency(facade.pricing)}</TableCell>
                <TableCell>{toNumerical(facade.efficiency)}</TableCell>
                <TableCell>
                  {toCurrency(facade.efficiency * quote.simulation.pricing.kwh)}
                </TableCell>
              </TableRow>
            ))}
            {quote.simulation.roofs.map((roof, index) => (
              <TableRow key={index}>
                <TableCell>Roof {index + 1}</TableCell>
                <TableCell>
                  {roof.number_of_panels} (
                  {humanize(quote.info.roofs[index].material)})
                </TableCell>
                <TableCell>{toCurrency(roof.pricing)}</TableCell>
                <TableCell>{toNumerical(roof.efficiency)}</TableCell>
                <TableCell>
                  {toCurrency(roof.efficiency * quote.simulation.pricing.kwh)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Total</Typography>
              </TableCell>
              <TableCell>
                {Object.entries(getTotalPanelsByMaterial(quote)).map(
                  ([material, total]) => (
                    <Typography key={material}>
                      {humanize(material)}: {total}
                    </Typography>
                  ),
                )}
              </TableCell>
              <TableCell>
                <Typography variant="h6">
                  {toCurrency(getTotalPricing(quote))}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">
                  {toNumerical(getTotalEfficiency(quote))}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">
                  {toCurrency(getTotalSavings(quote))}
                </Typography>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Box>

      <Divider />
    </Stack>
  );
};

export default QuoteSimulation;
