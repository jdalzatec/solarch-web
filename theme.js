import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fee140",
    },
    secondary: {
      main: "#fa709a",
    },
    background: {
      default: "#fafafa",
    },
    text: {
      primary: "#222",
    },
    divider: "#ebebeb",
  },
  typography: {
    fontFamily: "Raleway",
    fontSize: 14,
    button: {
      fontSize: "1rem",
      fontWeight: "bold",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          fontWeight: "bold",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 100,
        },
        notchedOutline: {
          legend: {
            marginLeft: 10,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginLeft: 10,
        },
        input: {
          borderRadius: 100,
        },
      },
    },
  },
});
