import { Stack, Step, StepContent, Typography } from "@mui/material";
import FlexRow from "../layout/FlexRow.jsx";
import PrimaryButton from "../PrimaryButton.jsx";
import TextField from "../TextField.jsx";
import useNewQuoteStore from "../../stores/newQuoteStore.js";
import SecondaryButton from "../SecondaryButton.jsx";
import FlexColumn from "../layout/FlexColumn.jsx";
import StepLabel from "./StepLabel.jsx";
import Select from "../Select.jsx";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const MATERIAL_OPTIONS = [
  {
    label: "Standard",
    value: "standard",
  },
  {
    label: "Thin Film",
    value: "thin_film",
  },
];

const DEFAULT_MATERIAL_FACADE = MATERIAL_OPTIONS[0].value;

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
    tilt: yup
      .number()
      .typeError("Tilt must be a number")
      .positive("Tilt must be a positive number")
      .required("Tilt is required")
      .min(0, "Min. value is 0")
      .max(90, "Max. value is 90"),
    azimuth: yup
      .number()
      .typeError("Azimuth must be a number")
      .positive("Azimuth must be a positive number")
      .required("Azimuth is required")
      .min(0, "Min. value is 0")
      .max(360, "Max. value is 360"),
  })
  .required();

const AskForFacadeInfo = ({ facadeIndex, ...props }) => {
  const stepLabel = `Enter facade ${facadeIndex + 1} info`;
  const stepDescription = `Enter the information of facade ${facadeIndex + 1}.`;

  const nextStep = useNewQuoteStore((state) => state.nextStep);
  const prevStep = useNewQuoteStore((state) => state.prevStep);

  const setFacadeData = useNewQuoteStore((state) => state.setFacadeData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(SCHEMA),
  });

  const handleNext = (data) => {
    setFacadeData(facadeIndex, data);
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
                error={errors.width}
                autoFocus
              />
              <TextField
                label="Height"
                {...register("height")}
                error={errors.height}
              />
              <TextField
                label="Tilt"
                {...register("tilt")}
                error={errors.tilt}
              />
              <TextField
                label="Azimuth"
                {...register("azimuth")}
                error={errors.azimuth}
              />
              <Controller
                render={({ field }) => (
                  <Select
                    options={MATERIAL_OPTIONS}
                    label="Material"
                    {...field}
                  />
                )}
                control={control}
                name="material"
                defaultValue={DEFAULT_MATERIAL_FACADE}
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
