import { useForm } from "react-hook-form";
import PrimaryButton from "../components/PrimaryButton.jsx";
import TextField from "../components/TextField.jsx";
import { useNavigate } from "react-router-dom";
import FlexColumn from "../components/layout/FlexColumn.jsx";
import LoginBox from "../components/layout/LoginBox.jsx";
import SecondaryButton from "../components/SecondaryButton.jsx";

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <LoginBox title="Sign up">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlexColumn>
          <TextField
            label="Full name"
            {...register("full_name", { required: true })}
          />
          <TextField
            label="Email"
            {...register("email", { required: true })}
            type="email"
          />
          <PrimaryButton type="submit">Sign up</PrimaryButton>
          <SecondaryButton onClick={() => navigate("/login")}>
            Cancel
          </SecondaryButton>
        </FlexColumn>
      </form>
    </LoginBox>
  );
};

export default SignUp;
