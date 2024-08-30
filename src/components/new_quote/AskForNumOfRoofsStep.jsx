import useNewQuoteStore from "../../stores/newQuoteStore.js";
import { Slider, Step, StepContent, Typography } from "@mui/material";
import FlexRow from "../layout/FlexRow.jsx";
import PrimaryButton from "../PrimaryButton.jsx";
import FlexColumn from "../layout/FlexColumn.jsx";
import SecondaryButton from "../SecondaryButton.jsx";
import StepLabel from "./StepLabel.jsx";

const MAX_NUMBER_OF_ROOFS = 4;
const AskForNumOfRoofsStep = ({ ...props }) => {
  const stepLabel = "Number of roofs";
  const stepDescription = `The number of roofs is the number of roofs of a building.`;

  const numberOfFacades = useNewQuoteStore((state) => state.numberOfFacades);

  const numberOfRoofs = useNewQuoteStore((state) => state.numberOfRoofs);
  const setNumberOfRoofs = useNewQuoteStore((state) => state.setNumberOfRoofs);
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
      <StepLabel label={stepLabel} step={2 + numberOfFacades + 1} />
      <StepContent>
        <Typography>{stepDescription}</Typography>

        <FlexColumn
          sx={{
            mt: 3,
          }}
        >
          <Slider
            min={1}
            max={MAX_NUMBER_OF_ROOFS}
            step={1}
            marks={Array.from({ length: MAX_NUMBER_OF_ROOFS + 1 }).map(
              (_, i) => ({
                value: i,
                label: i.toString(),
              }),
            )}
            value={numberOfRoofs}
            onChange={(_, value) => setNumberOfRoofs(value)}
          />
          <FlexRow>
            <PrimaryButton onClick={handleNext}>Continue</PrimaryButton>
            <SecondaryButton onClick={handleBack}>Back</SecondaryButton>
          </FlexRow>
        </FlexColumn>
      </StepContent>
    </Step>
  );
};

export default AskForNumOfRoofsStep;
