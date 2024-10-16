import { useFormContext } from "react-hook-form";
import { isOnlySpaces } from "../../../utils/helpers";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import SelectBox from "../../../ui/SelectBox";

function Step2({ previousStep, submitForm, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onSubmit = (data) => {
    submitForm(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid min-h-[50vh] grid-cols-1 gap-[20px] lg:grid-cols-2"
    >
      <Input
        label={"شرب الماء"}
        name="drinkingWater"
        register={register}
        validationRules={{
          validate: {
            noOnlySpaces: (value) => !isOnlySpaces(value) || "حقل غير صالح",
          },
          required: "هذا الحقل مطلوب",
        }}
        placeholder="شرب الماء"
        error={errors?.drinkingWater?.message}
        disabled={isLoading}
      />

      <SelectBox
        options={["عالي", "متوسط"]}
        label={"التوتر"}
        name="stress2"
        register={register}
        validationRules={{ required: "هذا الحقل مطلوب" }}
        error={errors?.stress2?.message}
      />

      <SelectBox
        options={["عالي", "متوسط"]}
        label={"الارهاق"}
        name="Fatigue"
        register={register}
        validationRules={{ required: "هذا الحقل مطلوب" }}
        error={errors?.Fatigue?.message}
      />

      <SelectBox
        options={["عالي", "متوسط"]}
        label={"هل يوجد مشاكل بالدوره"}
        name="periodProblems"
        register={register}
        validationRules={{ required: "هذا الحقل مطلوب" }}
        error={errors?.periodProblems?.message}
      />

      <div className="col-span-1 lg:col-span-2">
        <Button disabled={isLoading} type="submit" variant="tertiary">
          تم
        </Button>
      </div>
    </form>
  );
}

export default Step2;
