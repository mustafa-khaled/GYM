import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";
import afterEx from "../../assets/after_ex.webp";
import beforeEx from "../../assets/before_ex.webp";
import TransformationList from "./TransformationList";

const items = [
  {
    id: 1,
    name: "Item 1",
    img1: beforeEx,
    img2: afterEx,
  },
  {
    id: 2,
    name: "Item 2",
    img1: beforeEx,
    img2: afterEx,
  },
  {
    id: 3,
    name: "Item 3",
    img1: beforeEx,
    img2: afterEx,
  },
  {
    id: 4,
    name: "Item 4",
    img1: beforeEx,
    img2: afterEx,
  },
];

function TransformationsSection() {
  const lastTransformation = items[items?.length - 1];

  return (
    <section className="bg-black py-[30px]">
      <Container>
        <div className="relative flex min-h-[720px] flex-col-reverse gap-[10px] text-[#fff] md:flex-row">
          <div className="flex w-full flex-col justify-center md:w-[35%]">
            <h2 className="text-[32px] font-[700] leading-[40px] text-primary sm:text-[24px] sm:leading-[32px] lg:text-[48px] lg:leading-[24px]">
              التحولات
            </h2>
            <p className="mb-[40px] mt-[32px] text-[20px] font-[600] leading-[30px] sm:text-[16px] sm:leading-[24px] lg:text-[24px] lg:leading-[34px]">
              بعض النتائج لقبل وبعد التمرين
            </p>

            <Link to={"/subscriptions"} className="text-black">
              <Button
                AriaLabel="joinUsNow"
                variant="tertiary"
                styles={"w-full md:w-[200px] h-[50px]"}
              >
                انضم الينا
              </Button>
            </Link>
          </div>

          <div className="flex w-full items-center gap-[20px] md:w-[65%]">
            <figure className="relative">
              <img
                src={lastTransformation.img2}
                alt="after transition"
                className="rounded-md"
              />
              <div className="absolute bottom-[100px] left-[50%] hidden w-[199px] translate-x-[-50%] md:block">
                <Link to={"/contactUs"}>
                  <Button
                    AriaLabel="next"
                    variant="tertiary"
                    styles={"h-[56px]"}
                  >
                    بعد
                  </Button>
                </Link>
              </div>
            </figure>

            <figure className="relative">
              <img
                src={lastTransformation.img1}
                alt="before transition"
                className="rounded-md"
              />
              <div className="absolute bottom-[100px] left-[50%] hidden w-[199px] translate-x-[-50%] md:block">
                <Link to={"/contactUs"}>
                  <Button
                    AriaLabel="previous"
                    variant="tertiary"
                    styles={"h-[56px]"}
                  >
                    قبل
                  </Button>
                </Link>
              </div>
            </figure>
          </div>
        </div>
        <TransformationList items={items} />
      </Container>
    </section>
  );
}

export default TransformationsSection;
