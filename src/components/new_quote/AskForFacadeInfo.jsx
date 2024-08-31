import { Stack, Step, StepContent, Typography } from "@mui/material";
import FlexRow from "../layout/FlexRow.jsx";
import PrimaryButton from "../PrimaryButton.jsx";
import TextField from "../TextField.jsx";
import useNewQuoteStore from "../../stores/newQuoteStore.js";
import SecondaryButton from "../SecondaryButton.jsx";
import FlexColumn from "../layout/FlexColumn.jsx";
import StepLabel from "./StepLabel.jsx";
import Select from "../Select.jsx";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const MATERIAL_OPTIONS = [
  {
    label: "Material 1",
    value: "material1",
  },
  {
    label: "Material 2",
    value: "material2",
  },
  {
    label: "Material 3",
    value: "material3",
  },
];

const DEFAULT_MATERIAL_FACADE = MATERIAL_OPTIONS[0].value;

const SCHEMA = yup
  .object({
    width: yup.number().positive().required(),
    height: yup.number().positive().required(),
    tilt: yup.number().positive().required().min(0).max(90),
    azimuth: yup.number().positive().required().min(0).max(360),
  })
  .required();

const ERRORS = {
  width: "Width is required and must be a positive number",
  height: "Height is required and must be a positive number",
  tilt: "Tilt is required and must be a positive number between 0 and 90",
  azimuth:
    "Azimuth is required and must be a positive number between 0 and 360",
};

const AskForFacadeInfo = ({ facadeIndex, ...props }) => {
  const stepLabel = `Enter facade ${facadeIndex + 1} info`;
  const stepDescription = `Enter the information of facade ${facadeIndex + 1}.`;

  const nextStep = useNewQuoteStore((state) => state.nextStep);
  const prevStep = useNewQuoteStore((state) => state.prevStep);

  const data = useNewQuoteStore((state) => state.facadesData[facadeIndex]);
  const setFacadeData = useNewQuoteStore((state) => state.setFacadeData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMA),
  });

  const handleNext = (data) => {
    console.log(data);
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
                error={errors.width && ERRORS.width}
              />
              <TextField
                label="Height"
                {...register("height")}
                error={errors.height && ERRORS.height}
              />
              <TextField
                label="Tilt"
                {...register("tilt")}
                error={errors.tilt && ERRORS.tilt}
              />
              <TextField
                label="Azimuth"
                {...register("azimuth")}
                error={errors.azimuth && ERRORS.azimuth}
              />
              <Select
                value={data?.material || DEFAULT_MATERIAL_FACADE}
                options={MATERIAL_OPTIONS}
                label="Material"
                onChange={(value) =>
                  setFacadeData(facadeIndex, { material: value })
                }
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

export default AskForFacadeInfo;
