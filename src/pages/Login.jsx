import LoginForm from "../features/login/LoginForm";
import Container from "../ui/Container";
import MainSection from "../ui/MainSection";

function Login() {
  return (
    <MainSection>
      <Container>
        <LoginForm />
      </Container>
    </MainSection>
  );
}

export default Login;
