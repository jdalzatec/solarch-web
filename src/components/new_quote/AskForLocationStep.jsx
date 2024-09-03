import useNewQuoteStore from "../../stores/newQuoteStore.js";
import { Stack, Step, StepContent, Typography } from "@mui/material";
import FlexRow from "../layout/FlexRow.jsx";
import PrimaryButton from "../PrimaryButton.jsx";
import FlexColumn from "../layout/FlexColumn.jsx";
import TextField from "../TextField.jsx";
import { Controller, useForm } from "react-hook-form";
import StepLabel from "./StepLabel.jsx";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select.jsx";
import { humanize } from "../../utils/stringUtils.js";

const TYPE_OF_BUILDING = ["commercial", "residential", "industrial"];
const DEFAULT_TYPE_OF_BUILDING = TYPE_OF_BUILDING[0];

const SCHEMA = yup
  .object({
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
  })
  .required();

const AskForLocationStep = ({ ...props }) => {
  const stepLabel = "Location";
  const stepDescription = `Enter the location of the project.`;

  const setCity = useNewQuoteStore((state) => state.setCity);
  const setCountry = useNewQuoteStore((state) => state.setCountry);
  const setTypeOfBuilding = useNewQuoteStore(
    (state) => state.setTypeOfBuilding,
  );
  const nextStep = useNewQuoteStore((state) => state.nextStep);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMA),
  });

  const handleNext = (data) => {
    setCity(data.city);
    setCountry(data.country);
    setTypeOfBuilding(data.type);
    console.log(data);
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
              <Controller
                render={({ field }) => (
                  <Select
                    options={TYPE_OF_BUILDING.map((typeOfBuilding) => ({
                      value: typeOfBuilding,
                      label: humanize(typeOfBuilding),
                    }))}
                    label="Type"
                    {...field}
                  />
                )}
                control={control}
                name="type"
                defaultValue={DEFAULT_TYPE_OF_BUILDING}
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
