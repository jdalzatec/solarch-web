import { Button } from "@mui/material";

const SecondaryButton = ({ ...props }) => {
  return <Button variant="outlined" color="secondary" fullWidth {...props} />;
};

export default SecondaryButton;
