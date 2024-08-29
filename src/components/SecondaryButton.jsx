import { Button } from "@radix-ui/themes";

const SecondaryButton = ({ ...props }) => {
  return <Button size="3" variant="surface" color="crimson" {...props} />;
};

export default SecondaryButton;
