import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";
import afterEx from "../../assets/after_ex.png";
import beforeEx from "../../assets/before_ex.png";

function TransformationsSection() {
  return (
    <section className="bg-black py-[30px]">
      <Container>
        <div className="relative flex min-h-[720px] text-[#fff]">
          <div className="flex w-[35%] flex-col justify-center">
            <h2 className="text-[32px] font-[700] leading-[40px] text-primary sm:text-[24px] sm:leading-[32px] lg:text-[48px] lg:leading-[24px]">
              التحولات
            </h2>
            <p className="mb-[40px] mt-[32px] text-[20px] font-[600] leading-[30px] sm:text-[16px] sm:leading-[24px] lg:text-[24px] lg:leading-[34px]">
              بعض النتائج لقبل وبعد التمرين
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
          <div className="flex w-[65%] items-center gap-[20px]">
            <figure className="relative">
              <img src={afterEx} alt="" />
              <div className="absolute bottom-[100px] left-[50%] translate-x-[-50%]">
                <Button variant="tertiary" styles={"w-full w-[199px] h-[56px]"}>
                  بعد
                </Button>
              </div>
            </figure>

            <figure className="relative">
              <img src={beforeEx} alt="" />
              <div className="absolute bottom-[100px] left-[50%] translate-x-[-50%]">
                <Button variant="tertiary" styles={"w-full w-[199px] h-[56px]"}>
                  قبل
                </Button>
              </div>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TransformationsSection;
