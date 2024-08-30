import {
  IconButton,
  InputAdornment,
  TextField as MUITextField,
} from "@mui/material";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// eslint-disable-next-line react/display-name
const PasswordField = React.forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const onTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <MUITextField
      type={showPassword ? "text" : "password"}
      size="small"
      label="Password"
      ref={ref}
      {...props}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small" onClick={onTogglePassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
});

export default PasswordField;
