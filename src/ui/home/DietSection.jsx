import Container from "../Container";
import diet1 from "../../assets/home_diet.png";
import diet2 from "../../assets/hme_diet2.png";
import { Link } from "react-router-dom";
import Button from "../Button";

function DietSection() {
  return (
    <section className="py-[30px]">
      <Container>
        <div className="relative flex min-h-[720px] rounded-md bg-black text-[#fff]">
          <div className="w-full rounded-md md:w-[35%]">
            <img
              src={diet1}
              alt="a man exercising"
              className="h-full w-full rounded-r-md object-cover"
            />
          </div>
          <div className="hidden items-center justify-center md:flex md:w-[65%]">
            <img src={diet2} alt="" className="h-[535px] w-[432px]" />
          </div>

          <div className="absolute right-[50%] top-[50%] flex w-[90%] translate-x-[50%] flex-col bg-black p-[24px] md:right-[10%] md:w-[500px] md:translate-x-0 lg:h-[284px] lg:w-[646px]">
            <h2 className="text-[32px] font-[700] leading-[40px] text-primary sm:text-[24px] sm:leading-[32px] lg:text-[48px] lg:leading-[24px]">
              النظام الغذائي
            </h2>
            <p className="mb-[40px] mt-[32px] text-[20px] font-[600] leading-[30px] sm:text-[16px] sm:leading-[24px] lg:text-[24px] lg:leading-[34px]">
              خطط غذائية متوازنة لتحقق أهدافك الصحية وتزيد من طاقتك اليومية
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

export default DietSection;
