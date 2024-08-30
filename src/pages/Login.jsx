import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Link from "../components/Link.jsx";
import TextField from "../components/TextField.jsx";
import { useNavigate } from "react-router-dom";
import FlexColumn from "../components/layout/FlexColumn.jsx";
import LoginBox from "../components/layout/LoginBox.jsx";
import PasswordField from "../components/PasswordField.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <LoginBox title="Log in">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlexColumn>
          <TextField
            label="Email"
            {...register("email", { required: true })}
            type="email"
          />
          <PasswordField {...register("password", { required: true })} />
          <PrimaryButton type="submit">Log in</PrimaryButton>
          <Typography sx={{ mx: "auto" }}>
            Don't have an account?{" "}
            <Link onClick={() => navigate("/signup")} color="secondary">
              Sign up
            </Link>
          </Typography>
          <Typography sx={{ mx: "auto" }}>
            Did you forget your password?{" "}
            <Link onClick={() => navigate("/reset-password")} color="secondary">
              Reset password
            </Link>
          </Typography>
        </FlexColumn>
      </form>
    </LoginBox>
  );
};

export default Login;
