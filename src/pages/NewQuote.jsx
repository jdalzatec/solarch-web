import Layout from "../components/layout/Layout.jsx";
import { Box, Paper, Stack, Stepper, Typography } from "@mui/material";
import PrimaryButton from "../components/PrimaryButton.jsx";
import AskForNumOfFacadesStep from "../components/new_quote/AskForNumOfFacadesStep.jsx";
import useNewQuoteStore from "../stores/newQuoteStore.js";
import AskForFacadeInfo from "../components/new_quote/AskForFacadeInfo.jsx";
import AskForLocationStep from "../components/new_quote/AskForLocationStep.jsx";
import AskForNumOfRoofsStep from "../components/new_quote/AskForNumOfRoofsStep.jsx";
import AskForRoofInfo from "../components/new_quote/AskForRoofInfo.jsx";
import SecondaryButton from "../components/SecondaryButton.jsx";
import FlexRow from "../components/layout/FlexRow.jsx";

const NewQuote = () => {
  const activeStep = useNewQuoteStore((state) => state.activeStep);
  const numberOfFacades = useNewQuoteStore((state) => state.numberOfFacades);
  const numberOfRoofs = useNewQuoteStore((state) => state.numberOfRoofs);
  const reset = useNewQuoteStore((state) => state.reset);
  const getLastStepIndex = useNewQuoteStore((state) => state.getLastStepIndex);

  const getData = useNewQuoteStore((state) => state.getData);

  const handleRun = () => {
    const data = getData();
    console.log(data);
  };

  return (
    <Layout title="New project">
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
      {activeStep === getLastStepIndex() + 1 && (
        <Stack spacing={3}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <FlexRow>
            <PrimaryButton onClick={handleRun}>Run</PrimaryButton>
            <SecondaryButton onClick={reset}>Reset</SecondaryButton>
          </FlexRow>
        </Stack>
      )}
    </Layout>
  );
};

export default NewQuote;
