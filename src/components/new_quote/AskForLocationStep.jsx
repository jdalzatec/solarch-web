import useNewQuoteStore from "../../stores/newQuoteStore.js";
import {
  Slider,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Typography,
} from "@mui/material";
import FlexRow from "../layout/FlexRow.jsx";
import PrimaryButton from "../PrimaryButton.jsx";
import FlexColumn from "../layout/FlexColumn.jsx";
import TextField from "../TextField.jsx";

const AskForLocationStep = ({ ...props }) => {
  const stepLabel = "Location";
  const stepDescription = `Enter the location of the project.`;

  const location = useNewQuoteStore((state) => state.location);
  const setlocation = useNewQuoteStore((state) => state.setlocation);
  const nextStep = useNewQuoteStore((state) => state.nextStep);

  const handleNext = () => {
    nextStep();
  };

  return (
    <Step {...props}>
      <StepLabel>{stepLabel}</StepLabel>
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
            <TextField label="City" />
            <TextField label="Country" />
          </Stack>
          <FlexRow>
            <PrimaryButton onClick={handleNext}>Continue</PrimaryButton>
          </FlexRow>
        </FlexColumn>
      </StepContent>
    </Step>
  );
};

export default AskForLocationStep;
