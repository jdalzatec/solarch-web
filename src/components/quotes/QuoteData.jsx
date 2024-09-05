import {
  Box,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { humanize } from "../../utils/stringUtils.js";

const QuoteData = ({ data, actions = {} }) => {
  const baseProps = {
    hover: true,
    sx: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  };

  if (!data) {
    return null;
  }

  return (
    <Stack
      spacing={4}
      sx={{
        mb: 5,
      }}
    >
      <Typography variant="h6">Project data</Typography>
      <Box
        sx={{
          overflowX: "auto",
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>City</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              {...(actions.location ? baseProps : {})}
              onClick={() => actions.location && actions.location()}
            >
              <TableCell>Location</TableCell>
              <TableCell>{data.city}</TableCell>
              <TableCell>{data.country}</TableCell>
              <TableCell>{humanize(data.type)}</TableCell>
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
              <TableCell>Facade Index</TableCell>
              <TableCell>Width [m]</TableCell>
              <TableCell>Height [m]</TableCell>
              <TableCell>Tilt [&deg;]</TableCell>
              <TableCell>Azimuth [&deg;]</TableCell>
              <TableCell>Material</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(data.facades).map(([key, value], index) => (
              <TableRow
                key={key}
                {...(actions.facade ? baseProps : {})}
                onClick={() => {
                  actions.facade && actions.facade(index);
                }}
              >
                <TableCell>{parseInt(key) + 1}</TableCell>
                <TableCell>{value.width}</TableCell>
                <TableCell>{value.height}</TableCell>
                <TableCell>{value.tilt}</TableCell>
                <TableCell>{value.azimuth}</TableCell>
                <TableCell>{humanize(value.material)}</TableCell>
              </TableRow>
            ))}
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
              <TableCell>Roof Index</TableCell>
              <TableCell>Width [m]</TableCell>
              <TableCell>Height [m]</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(data.roofs).map(([key, value], index) => (
              <TableRow
                key={key}
                {...(actions.roof ? baseProps : {})}
                onClick={() => {
                  actions.roof && actions.roof(index);
                }}
              >
                <TableCell>{parseInt(key) + 1}</TableCell>
                <TableCell>{value.width}</TableCell>
                <TableCell>{value.height}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Stack>
  );
};

export default QuoteData;
