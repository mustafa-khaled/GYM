import { Fragment } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../ui/Input";
import SelectBox from "../../../ui/SelectBox";
import Button from "../../../ui/Button";
import { isOnlySpaces } from "../../../utils/helpers";
import useUserDailyQuestions from "../../../queries/useUserDailyQuestions";
import { useAnswerDailyQuestions } from "../../../queries/useAnswerDailyQuestions";

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-US");

function DailyNotificationForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      answers: [],
    },
  });

  const { userDailyQuestions, isQuestionsLoading } =
    useUserDailyQuestions("11/18/2024");

  // const { userDailyQuestions, isQuestionsLoading } =
  //   useUserDailyQuestions(formattedDate);
  const { sendDailyAnswers, isSendingDailyAnswersLoading } =
    useAnswerDailyQuestions();

  const onSubmit = (data) => {
    sendDailyAnswers({ date: formattedDate, ...data });
  };

  const isDisabled = isQuestionsLoading || isSendingDailyAnswersLoading;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-[20px] lg:grid-cols-2"
    >
      {userDailyQuestions?.map((userQuestion) => {
        const fieldName = `answers[${userQuestion?.id}]`;
        const options = userQuestion?.question?.options?.map((question) => ({
          value: Number(question.id),
          title: question.option,
        }));
        return (
          <Fragment key={userQuestion?.id}>
            {userQuestion?.question?.type === "text" && (
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
                      !isOnlySpaces(value) || "لا يجب أن يحتوي على مسافات فقط",
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

      <div className="col-span-1 lg:col-span-2">
        <Button type="submit" variant="tertiary">
          تم
        </Button>
      </div>
    </form>
  );
}

export default DailyNotificationForm;
