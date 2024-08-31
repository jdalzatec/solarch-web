import useNewQuoteStore from "../../stores/newQuoteStore.js";
import { Slider, Step, StepContent, Typography } from "@mui/material";
import FlexRow from "../layout/FlexRow.jsx";
import PrimaryButton from "../PrimaryButton.jsx";
import FlexColumn from "../layout/FlexColumn.jsx";
import SecondaryButton from "../SecondaryButton.jsx";
import StepLabel from "./StepLabel.jsx";

const MAX_NUMBER_OF_FACADES = 8;
const AskForNumOfFacadesStep = ({ ...props }) => {
  const stepLabel = "Number of facades";
  const stepDescription = `The number of facades is the number of faces of a building.`;

  const numberOfFacades = useNewQuoteStore((state) => state.numberOfFacades);
  const setNumberOfFacades = useNewQuoteStore(
    (state) => state.setNumberOfFacades,
  );
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
      <StepLabel label={stepLabel} step={1} />
      <StepContent>
        <Typography>{stepDescription}</Typography>

        <FlexColumn
          sx={{
            mt: 3,
          }}
        >
          <Slider
            min={1}
            max={MAX_NUMBER_OF_FACADES}
            step={1}
            marks={Array.from({ length: MAX_NUMBER_OF_FACADES + 1 }).map(
              (_, i) => ({
                value: i,
                label: i.toString(),
              }),
            )}
            value={numberOfFacades}
            onChange={(_, value) => setNumberOfFacades(value)}
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

export default AskForNumOfFacadesStep;
