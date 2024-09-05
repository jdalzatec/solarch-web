import { LinearProgress as MUILinearProgress, useTheme } from "@mui/material";

const LinearProgress = ({ ...props }) => {
  const theme = useTheme();

  return (
    <MUILinearProgress
      sx={{
        borderRadius: 5,
        "& .MuiLinearProgress-bar": {
          background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
        },
      }}
      {...props}
    />
  );
};

export default LinearProgress;
