import { Stack, Step, StepContent, Typography } from "@mui/material";
import FlexRow from "../layout/FlexRow.jsx";
import PrimaryButton from "../PrimaryButton.jsx";
import TextField from "../TextField.jsx";
import useNewQuoteStore from "../../stores/newQuoteStore.js";
import SecondaryButton from "../SecondaryButton.jsx";
import FlexColumn from "../layout/FlexColumn.jsx";
import StepLabel from "./StepLabel.jsx";

const AskForFacadeInfo = ({ facadeIndex, ...props }) => {
  const stepLabel = `Enter facade ${facadeIndex + 1} info`;
  const stepDescription = `Enter the information of facade ${facadeIndex + 1}.`;

  const nextStep = useNewQuoteStore((state) => state.nextStep);
  const prevStep = useNewQuoteStore((state) => state.prevStep);

  const handleNext = () => {
    nextStep();
  };

  const handleBack = () => {
    prevStep();
  };

  return (
    <Step {...props}>
      <StepLabel label={stepLabel} step={2 + facadeIndex} />
      <StepContent>
        <Typography>{stepDescription}</Typography>

        <FlexColumn
          sx={{
            mt: 3,
          }}
        >
          <Stack
            direction={{ md: "row" }}
            sx={{
              gap: 3,
            }}
          >
            <TextField label="Width" />
            <TextField label="Height" />
            <TextField label="Tilt" />
            <TextField label="Azimuth" />
          </Stack>
          <FlexRow>
            <PrimaryButton onClick={handleNext}>Continue</PrimaryButton>
            <SecondaryButton onClick={handleBack}>Back</SecondaryButton>
          </FlexRow>
        </FlexColumn>
      </StepContent>
    </Step>
  );
};

export default AskForFacadeInfo;
