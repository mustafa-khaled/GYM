import { Fragment } from "react";
import { useForm, useWatch } from "react-hook-form";
import { isOnlySpaces } from "../../../utils/helpers";
import { useAnswerDailyQuestions } from "../../../queries/useAnswerDailyQuestions";
import Input from "../../../ui/Input";
import SelectBox from "../../../ui/SelectBox";
import Button from "../../../ui/Button";
import Spinner from "../../../ui/spinner/Spinner";
import useUserDailyQuestions from "../../../queries/useUserDailyQuestions";

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-US");

function DailyNotificationForm() {
  const { userDailyQuestions, isQuestionsLoading } =
    useUserDailyQuestions(formattedDate);

  const { sendDailyAnswers, isSendingDailyAnswersLoading } =
    useAnswerDailyQuestions();

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm({
    defaultValues: {
      answers: {},
    },
  });

  const answers = useWatch({
    control,
    name: "answers",
  });

  // Calculate progress
  const filledFields = Object.values(answers || {}).filter(
    (answer) => answer && !isOnlySpaces(answer),
  ).length;

  const totalQuestions = userDailyQuestions?.length || 0;
  const progress =
    totalQuestions > 0 ? Math.round((filledFields / totalQuestions) * 100) : 0;

  const onSubmit = (data) => {
    const transformedAnswers = Object.entries(data.answers).map(
      ([questionId, answer]) => ({
        question_id: Number(questionId),
        answer,
      }),
    );

    sendDailyAnswers({
      date: formattedDate,
      answers: transformedAnswers,
    });
  };

  if (isQuestionsLoading) return <Spinner className="!h-[20vh] w-full" />;

  if (!userDailyQuestions?.length)
    return (
      <div className="mx-auto flex w-[90%] flex-col gap-[10px] rounded-md bg-[#323232d6] p-[10px] text-center md:w-[450px]">
        لايوجد اسئله لعرضها اليوم.
      </div>
    );

  const isDisabled = isQuestionsLoading || isSendingDailyAnswersLoading;

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 items-center gap-[20px] md:grid-cols-2"
      >
        {userDailyQuestions?.map((userQuestion) => {
          const fieldName = `answers[${userQuestion?.id}]`;
          const options = userQuestion?.question?.options?.map((question) => ({
            value: Number(question.id),
            title: question.option,
          }));
          return (
            <Fragment key={userQuestion?.id}>
              {["text", "number"].includes(userQuestion?.question?.type) && (
                <Input
                  label={userQuestion?.question?.question}
                  name={fieldName}
                  register={register}
                  validationRules={{
                    required: userQuestion?.is_required
                      ? "هذا الحقل مطلوب"
                      : false,
                    validate: {
                      noOnlySpaces: (value) =>
                        !isOnlySpaces(value) ||
                        "لا يجب أن يحتوي على مسافات فقط",
                    },
                  }}
                  placeholder={userQuestion?.question?.question}
                  error={errors?.[fieldName]?.message}
                  disabled={isDisabled}
                />
              )}
              {userQuestion?.question?.type === "select" && (
                <SelectBox
                  disabled={isDisabled}
                  options={options || []}
                  label={userQuestion?.question?.question}
                  name={fieldName}
                  register={register}
                  validationRules={{
                    required: userQuestion?.is_required
                      ? "هذا الحقل مطلوب"
                      : false,
                  }}
                  error={errors?.[fieldName]?.message}
                />
              )}
            </Fragment>
          );
        })}

        <div className="col-span-1 md:col-span-2">
          <Button
            AriaLabel="answersForDailyNotifications"
            type="submit"
            variant="tertiary"
          >
            تم
          </Button>
        </div>
      </form>

      {/* Progress Bar */}
      <div className="mt-5">
        <div className="h-4 w-full rounded-full bg-gray-300">
          <div
            className="ms-auto h-full rounded-full bg-primary transition-all duration-[1.5s]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );
}

export default DailyNotificationForm;
