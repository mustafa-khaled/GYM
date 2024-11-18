import image from "../assets/hero_section_home.webp";
import LoginForm from "../features/login/LoginForm";
import Container from "../ui/Container";

function Login() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-64px)] items-center text-[#fff]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-black/10 to-[#240101]" />

      <Container>
        <LoginForm />
      </Container>
    </section>
  );
}

export default Login;
