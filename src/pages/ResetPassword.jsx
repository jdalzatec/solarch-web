import { useForm } from "react-hook-form";
import PrimaryButton from "../components/PrimaryButton.jsx";
import TextField from "../components/TextField.jsx";
import { useNavigate } from "react-router-dom";
import FlexColumn from "../components/FlexColumn.jsx";
import LoginBox from "../components/LoginBox.jsx";
import SecondaryButton from "../components/SecondaryButton.jsx";
import { useState } from "react";
import PasswordField from "../components/PasswordField.jsx";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { register, unregister, handleSubmit } = useForm();
  const [stage, setStage] = useState("send_code");

  const onSendCode = (data) => {
    setStage("reset_password");
    console.log(data);
    console.log(stage);
    unregister("email");
  };

  const onChangePassword = (data) => {
    console.log(data);
  };

  return (
    <LoginBox title="Reset password">
      {stage === "send_code" && (
        <form onSubmit={handleSubmit(onSendCode)}>
          <FlexColumn>
            <TextField
              label="Email"
              {...register("email", { required: true })}
              type="email"
            />
            <PrimaryButton type="submit">Send code</PrimaryButton>
            <SecondaryButton onClick={() => navigate("/login")}>
              Cancel
            </SecondaryButton>
          </FlexColumn>
        </form>
      )}
      {stage === "reset_password" && (
        <form onSubmit={handleSubmit(onChangePassword)}>
          <FlexColumn>
            <TextField
              label="Verification code"
              {...register("verification_code", { required: true })}
            />
            <PasswordField
              label="New password"
              {...register("new_password", { required: true })}
            />
            <PasswordField
              label="Confirm password"
              {...register("confirm_password", { required: true })}
            />
            <PrimaryButton type="submit">Change password</PrimaryButton>
            <SecondaryButton onClick={() => navigate("/login")}>
              Cancel
            </SecondaryButton>
          </FlexColumn>
        </form>
      )}
    </LoginBox>
  );
};

export default ResetPassword;