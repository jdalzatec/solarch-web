import { Box, StepLabel as MUIStepLabel } from "@mui/material";
import useNewQuoteStore from "../../stores/newQuoteStore.js";

const StepLabel = ({ label, step, ...props }) => {
  const activeStep = useNewQuoteStore((state) => state.activeStep);
  const setActiveStep = useNewQuoteStore((state) => state.setActiveStep);

  const canNavigate = step < activeStep;

  return (
    <MUIStepLabel {...props}>
      <Box
        onClick={() => canNavigate && setActiveStep(step)}
        sx={{
          cursor: canNavigate ? "pointer" : "default",
        }}
      >
        {label}
      </Box>
    </MUIStepLabel>
  );
};

export default StepLabel;
