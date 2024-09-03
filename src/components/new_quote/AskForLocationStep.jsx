import useNewQuoteStore from "../../stores/newQuoteStore.js";
import { Stack, Step, StepContent, Typography } from "@mui/material";
import FlexRow from "../layout/FlexRow.jsx";
import PrimaryButton from "../PrimaryButton.jsx";
import FlexColumn from "../layout/FlexColumn.jsx";
import TextField from "../TextField.jsx";
import { useForm } from "react-hook-form";
import StepLabel from "./StepLabel.jsx";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const SCHEMA = yup
  .object({
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
  })
  .required();

const AskForLocationStep = ({ ...props }) => {
  const stepLabel = "Location";
  const stepDescription = `Enter the location of the project.`;

  const city = useNewQuoteStore((state) => state.city);
  const country = useNewQuoteStore((state) => state.country);
  const setCity = useNewQuoteStore((state) => state.setCity);
  const setCountry = useNewQuoteStore((state) => state.setCountry);
  const nextStep = useNewQuoteStore((state) => state.nextStep);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { city, country },
    resolver: yupResolver(SCHEMA),
  });

  useEffect(() => {
    reset({ city, country });
  }, [city, country, reset]);

  const handleNext = (data) => {
    setCity(data.city);
    setCountry(data.country);
    nextStep();
  };

  return (
    <Step {...props}>
      <StepLabel label={stepLabel} step={0} />
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
                label="City"
                {...register("city")}
                error={errors.city}
                autoFocus
              />
              <TextField
                label="Country"
                {...register("country")}
                error={errors.country}
              />
            </Stack>
            <FlexRow>
              <PrimaryButton type="submit">Continue</PrimaryButton>
            </FlexRow>
          </FlexColumn>
        </form>
      </StepContent>
    </Step>
  );
};

export default AskForLocationStep;
