import Layout from "../components/layout/Layout.jsx";
import {
  Box,
  Divider,
  Stack,
  Stepper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PrimaryButton from "../components/PrimaryButton.jsx";
import AskForNumOfFacadesStep from "../components/new_quote/AskForNumOfFacadesStep.jsx";
import useNewQuoteStore from "../stores/newQuoteStore.js";
import AskForFacadeInfo from "../components/new_quote/AskForFacadeInfo.jsx";
import AskForLocationStep from "../components/new_quote/AskForLocationStep.jsx";
import AskForNumOfRoofsStep from "../components/new_quote/AskForNumOfRoofsStep.jsx";
import AskForRoofInfo from "../components/new_quote/AskForRoofInfo.jsx";

const NewQuote = () => {
  const activeStep = useNewQuoteStore((state) => state.activeStep);
  const setActiveStep = useNewQuoteStore((state) => state.setActiveStep);

  const numberOfFacades = useNewQuoteStore((state) => state.numberOfFacades);
  const numberOfRoofs = useNewQuoteStore((state) => state.numberOfRoofs);
  const getLastStepIndex = useNewQuoteStore((state) => state.getLastStepIndex);

  const getData = useNewQuoteStore((state) => state.getData);

  const handleRun = () => {
    const data = getData();
    console.log(data);
  };

  const links = [{ text: "Back", link: "/", action: "secondary" }];

  return (
    <Layout title="New project" links={links}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <AskForLocationStep />
        <AskForNumOfFacadesStep />
        {Array.from({ length: numberOfFacades }).map((_, i) => (
          <AskForFacadeInfo facadeIndex={i} key={i} />
        ))}
        <AskForNumOfRoofsStep />
        {Array.from({ length: numberOfRoofs }).map((_, i) => (
          <AskForRoofInfo roofIndex={i} key={i} />
        ))}
      </Stepper>

      <Divider />

      {activeStep === getLastStepIndex() + 1 && (
        <Box>
          <Typography variant="h6">Review Data</Typography>

          <Stack
            spacing={5}
            sx={{
              mb: 10,
            }}
          >
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    hover={true}
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => {
                      setActiveStep(0);
                    }}
                    title="Click to edit"
                  >
                    <TableCell>Location</TableCell>
                    <TableCell>{getData().city}</TableCell>
                    <TableCell>{getData().country}</TableCell>
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
                    <TableCell>Tilt [degrees]</TableCell>
                    <TableCell>Azimuth [degrees]</TableCell>
                    <TableCell>Material</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(getData().facades).map(([key, value]) => (
                    <TableRow
                      key={key}
                      hover={true}
                      sx={{
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => {
                        setActiveStep(2 + parseInt(key));
                      }}
                      title="Click to edit"
                    >
                      <TableCell>{parseInt(key) + 1}</TableCell>
                      <TableCell>{value.width}</TableCell>
                      <TableCell>{value.height}</TableCell>
                      <TableCell>{value.tilt}</TableCell>
                      <TableCell>{value.azimuth}</TableCell>
                      <TableCell>{value.material}</TableCell>
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
                  {Object.entries(getData().roofs).map(([key, value]) => (
                    <TableRow
                      key={key}
                      hover={true}
                      sx={{
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => {
                        setActiveStep(2 + numberOfFacades + 1 + parseInt(key));
                      }}
                      title="Click to edit"
                    >
                      <TableCell>{parseInt(key) + 1}</TableCell>
                      <TableCell>{value.width}</TableCell>
                      <TableCell>{value.height}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Divider />
            <PrimaryButton onClick={handleRun}>Run</PrimaryButton>

            <Divider />
          </Stack>
        </Box>
      )}
    </Layout>
  );
};

export default NewQuote;
