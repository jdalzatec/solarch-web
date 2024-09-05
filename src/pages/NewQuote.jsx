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
import { humanize } from "../utils/stringUtils.js";
import QuoteData from "../components/quotes/QuoteData.jsx";

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
          <QuoteData
            data={getData()}
            actions={{
              location: () => setActiveStep(0),
              facade: (index) => setActiveStep(2 + index),
              roof: (index) => setActiveStep(2 + numberOfFacades + 1 + index),
            }}
          />

          <PrimaryButton onClick={handleRun}>Run</PrimaryButton>
        </Box>
      )}
    </Layout>
  );
};

export default NewQuote;
