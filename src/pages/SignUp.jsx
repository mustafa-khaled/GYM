import image from "../assets/hero_section_home.jpg";
import SignUpForm from "../features/singup/SignUpForm";
import Container from "../ui/Container";

function SignUp() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-64px)] items-center"
      style={{ backgroundImage: `url(${image})`, backgroundPosition: "50%" }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-black/10 to-[#240101]" />

      <Container>
        <SignUpForm />
      </Container>
    </section>
  );
}

export default SignUp;
