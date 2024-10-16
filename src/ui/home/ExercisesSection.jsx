import { Link } from "react-router-dom";
import exersizeImage from "../../assets/exersise_program.png";
import Button from "../Button";
import Container from "../Container";

function ExercisesSection() {
  return (
    <section className="py-[30px]">
      <Container>
        <div className="relative flex min-h-[720px] rounded-md bg-black text-[#fff]">
          <div className="hidden md:block md:w-[50%]"></div>
          <div className="w-full md:w-[50%]">
            <img
              src={exersizeImage}
              alt="man exercising"
              className="h-full rounded-l-md object-cover"
            />
          </div>

          <div className="absolute right-[50%] top-[50%] flex w-[90%] translate-x-[50%] flex-col bg-black p-[24px] md:right-[10%] md:w-[500px] md:translate-x-0 lg:h-[284px] lg:w-[646px]">
            <h2 className="text-[32px] font-[700] leading-[40px] text-primary sm:text-[24px] sm:leading-[32px] lg:text-[48px] lg:leading-[24px]">
              برنامج التمرين
            </h2>
            <p className="mb-[40px] mt-[32px] text-[20px] font-[600] leading-[30px] sm:text-[16px] sm:leading-[24px] lg:text-[24px] lg:leading-[34px]">
              برنامج تمرين مصمم لتحقيق افضل نتيجة والوصول لجسم احلامك في اسرع
              وقت ممكن !
            </p>

            <Link to={"/"} className="text-black">
              <Button
                variant="tertiary"
                styles={"w-full md:w-[200px] h-[50px]"}
              >
                المزيد
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExercisesSection;
