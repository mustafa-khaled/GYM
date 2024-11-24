import { useForm } from "react-hook-form";
import { useUserWeeklyQuestions } from "../../../queries/useUserWeeklyQuestions";
import { useAnswerWeekEvaluation } from "../../../queries/useAnswerWeekEvaluation";
import bodyImage from "../../../assets/body.png";
import UploadFile from "../../../ui/UploadFile";
import Button from "../../../ui/Button";

function WeeklyImagesForm() {
  const { weeklyQuestions } = useUserWeeklyQuestions();
  const { sendWeekEvaluation, isLoading } = useAnswerWeekEvaluation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    sendWeekEvaluation({
      front_image: data?.frontImage?.[0],
      back_image: data?.backImage?.[0],
      question_id: weeklyQuestions?.[0]?.id,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-[20px] flex flex-col items-center gap-[20px] md:flex-row">
        <div className="flex h-auto w-full items-center justify-center lg:h-[60vh] lg:w-[50%]">
          <img src={bodyImage} alt="body" className="h-[50vh]" />
        </div>

        <div className="flex h-auto w-full flex-col items-end gap-[10px] rounded-md md:flex-row md:gap-0 lg:w-[50%]">
          <div className="w-full bg-[#000] p-[10px]">
            <UploadFile
              placeholder="ارفاق صوره من الامام"
              register={register("frontImage", {
                required: "صورة من الأمام مطلوبة",
              })}
              error={errors.frontImage?.message}
            />
          </div>

          <div className="w-full bg-[#000] p-[10px]">
            <UploadFile
              placeholder="ارفاق صوره من الخلف"
              register={register("backImage", {
                required: "صورة من الخلف مطلوبة",
              })}
              error={errors.backImage?.message}
            />
          </div>
        </div>
      </div>

      {weeklyQuestions?.length ? (
        <div className="mt-3 flex justify-end lg:mt-0">
          <Button styles={"md:w-1/4"} type="submit" disabled={isLoading}>
            ارسال
          </Button>
        </div>
      ) : null}
    </form>
  );
}

export default WeeklyImagesForm;
