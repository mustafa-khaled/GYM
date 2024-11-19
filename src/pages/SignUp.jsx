import SignUpForm from "../features/singup/SignUpForm";
import Container from "../ui/Container";
import MainSection from "../ui/MainSection";

function SignUp() {
  return (
    <MainSection>
      <Container>
        <SignUpForm />
      </Container>
    </MainSection>
  );
}

export default SignUp;
