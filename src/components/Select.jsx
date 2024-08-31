import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from "@mui/material";
import { baseOverrides } from "../../theme.js";
import React from "react";

const Select = React.forwardRef((props, ref) => {
  const { value, options, onChange } = props;

  const handleChange = (event) => {
    onChange && onChange(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      sx={baseOverrides}
      size="small"
      ref={ref}
      color="text"
      {...props}
    >
      <InputLabel color="text">{props.label}</InputLabel>
      <MUISelect label={props.label} onChange={handleChange} value={value}>
        {options.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
});

export default Select;
