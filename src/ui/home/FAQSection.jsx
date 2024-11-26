import { useState } from "react";
import { Link } from "react-router-dom";
import { GoPlus, GoDash } from "react-icons/go";
import { useGlobal } from "../../queries/useGlobal";

import Button from "../Button";
import Container from "../Container";
import Spinner from "../spinner/Spinner";

function FAQSection() {
  const { isLoading, fqs } = useGlobal();
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  if (isLoading) return <Spinner />;
  if (!fqs?.length) return;

  return (
    <section className="bg-black py-[30px]">
      <Container>
        <div className="flex min-h-[720px] flex-col gap-[30px] text-[#fff] md:flex-row md:gap-[10px]">
          <div className="flex w-full flex-col justify-center text-center md:w-[35%] md:text-right">
            <h2 className="text-[32px] font-[700] leading-[50px] text-primary sm:text-[24px] sm:leading-[32px] lg:text-[48px] lg:leading-[24px]">
              الاسئله الشائعه
            </h2>
            <p className="mb-[40px] mt-[32px] text-[20px] font-[600] leading-[30px] sm:text-[16px] sm:leading-[24px] lg:text-[24px] lg:leading-[34px]">
              بعض الاسئله التي قد تخطر في بالك
            </p>

            <Link to={"/contactUs"}>
              <Button
                AriaLabel="moreQuestions"
                variant="tertiary"
                styles={"w-full md:w-[200px] h-[50px]"}
              >
                المزيد
              </Button>
            </Link>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-[20px] md:w-[65%]">
            {fqs?.map((quiz) => {
              const isActive = activeQuestion === quiz.id;

              return (
                <article
                  key={quiz.id}
                  className={`w-full cursor-pointer rounded-md p-[10px] text-black ${isActive ? "bg-gradient-to-br from-[#FFFFFF] to-primary" : "bg-[#FFFFFF]"}`}
                  onClick={() => toggleQuestion(quiz.id)}
                >
                  <h2 className="flex items-center justify-between text-[24px] font-[600] leading-[42px]">
                    {quiz.question}
                    {isActive ? <GoDash /> : <GoPlus />}
                  </h2>

                  <p
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? "clip-active h-auto py-4" : "clip-hidden h-0"
                    }`}
                    style={{
                      clipPath: isActive
                        ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                        : "polygon(0 0, 100% 0, 100% 0, 0 0)",
                    }}
                  >
                    {quiz.answer}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FAQSection;
