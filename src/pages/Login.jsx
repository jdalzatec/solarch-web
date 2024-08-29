import { Flex, Card, Heading, TextField, Text, Link } from "@radix-ui/themes";
import Logo from "../components/Logo.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";

const Login = () => {
  return (
    <Flex
      direction="column"
      height="100vh"
      maxWidth="600px"
      m="auto"
      justify="center"
    >
      <Card
        size="3"
        maxWidth="600px"
        style={{
          boxShadow:
            "0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Flex direction="column" gap="4" align="stretch">
          <Flex direction="column" align="center" gap="8">
            <Logo />
            <Heading>Sign In</Heading>
          </Flex>
          <TextField.Root size="3" placeholder="Email" />
          <TextField.Root size="3" placeholder="Password" type="password" />
          <PrimaryButton>Login</PrimaryButton>
          <Text mx="auto">
            No have an account? <Link href="/signup">Sign up</Link>
          </Text>
        </Flex>
      </Card>
    </Flex>
  );
};

export default Login;
