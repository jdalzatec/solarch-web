import { Stack, Step, StepContent, Typography } from "@mui/material";
import FlexRow from "../layout/FlexRow.jsx";
import PrimaryButton from "../PrimaryButton.jsx";
import TextField from "../TextField.jsx";
import useNewQuoteStore from "../../stores/newQuoteStore.js";
import SecondaryButton from "../SecondaryButton.jsx";
import FlexColumn from "../layout/FlexColumn.jsx";
import StepLabel from "./StepLabel.jsx";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const SCHEMA = yup
  .object({
    width: yup
      .number()
      .typeError("Width must be a number")
      .positive("Width must be a positive number")
      .required("Width is required"),
    height: yup
      .number()
      .typeError("Height must be a number")
      .positive("Height must be a positive number")
      .required("Height is required"),
  })
  .required();

const AskForRoofInfo = ({ roofIndex, ...props }) => {
  const stepLabel = `Enter roof ${roofIndex + 1} info`;
  const stepDescription = `Enter the information of roof ${roofIndex + 1}.`;

  const numberOfFacades = useNewQuoteStore((state) => state.numberOfFacades);

  const setRoofData = useNewQuoteStore((state) => state.setRoofData);

  const nextStep = useNewQuoteStore((state) => state.nextStep);
  const prevStep = useNewQuoteStore((state) => state.prevStep);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMA),
  });

  const handleNext = (data) => {
    setRoofData(roofIndex, data);
    nextStep();
  };

  const handleBack = () => {
    prevStep();
  };

  return (
    <Step {...props}>
      <StepLabel label={stepLabel} step={2 + numberOfFacades + 1 + roofIndex} />
      <StepContent>
        <Typography>{stepDescription}</Typography>

        <form onSubmit={handleSubmit(handleNext)}>
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
              <TextField
                label="Width"
                {...register("width")}
                error={errors.width}
              />
              <TextField
                label="Height"
                {...register("height")}
                error={errors.height}
              />
            </Stack>
            <FlexRow>
              <PrimaryButton type="submit">Continue</PrimaryButton>
              <SecondaryButton onClick={handleBack}>Back</SecondaryButton>
            </FlexRow>
          </FlexColumn>
        </form>
      </StepContent>
    </Step>
  );
};

export default AskForRoofInfo;
