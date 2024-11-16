import { Link } from "react-router-dom";
import image from "../../assets/hero_section_home.jpg";
import Button from "../Button";
import Container from "../Container";

function HeroSection() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-64px)] items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-black/10 to-[#240101]" />

      <Container>
        <div className="relative flex flex-col text-[#fff]">
          <h1 className="text-[25px] font-[900] leading-[35px] lg:text-[32px]">
            انطلق نحو أفضل نسخة من نفسك!.. هل أنت جاهز لتغيير حياتك؟
          </h1>
          <p className="mb-[30px] mt-[18px] text-[20px] font-[700] leading-[32px] lg:mb-[40px] lg:mt-[24px] lg:text-[24px]">
            احصل على الجسم المثالي، وزد ثقتك بنفسك، وحقق أهدافك مع خطط تدريبية
            مخصصة ودعم مستمر.
          </p>
          <Link to={"/contactUs"} className="text-black">
            <Button
              variant="tertiary"
              styles={"lg:w-[438px] w-full md:w-[400px] md:h-[72px] h-[50px]"}
            >
              انضم إلينا اليوم وابدأ رحلتك نحو اللياقة!
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
