import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fee140",
      light: "#FEEF9A",
    },
    secondary: {
      main: "#fa709a",
      light: "#FDC4D5",
    },
    background: {
      default: "#fafafa",
    },
    text: {
      primary: "#222",
    },
    success: {
      main: "#2ed573",
      light: "#AAEEC6",
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
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: "#ebebeb",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child td, &:last-child th": {
            borderColor: "#222",
          },
        },
      },
    },
  },
});

export const baseOverrides = {
  "& .Mui-focused": {
    borderRadius: "1px",
  },
};
