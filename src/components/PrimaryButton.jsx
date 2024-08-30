import { Button } from "@mui/material";

const PrimaryButton = ({ ...props }) => {
  return <Button variant="contained" fullWidth {...props} />;
};

export default PrimaryButton;
