import { useFormContext } from "react-hook-form";
import SelectBox from "../../../ui/SelectBox";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";

function Step1({ nextStep, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onSubmit = (data) => {
    if (!Object.keys(errors).length) {
      nextStep(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-[20px] lg:grid-cols-2"
    >
      <Input
        label={"الوزن علي معده فاضيه"}
        name="weight"
        register={register}
        validationRules={{
          required: "هذا الحقل مطلوب",
        }}
        placeholder="الوزن علي معده فاضيه"
        error={errors?.weight?.message}
        disabled={isLoading}
      />

      <Input
        label={"عدد الخطوات"}
        name="stepsCount"
        register={register}
        validationRules={{
          required: "هذا الحقل مطلوب",
        }}
        placeholder="عدد الخطوات"
        error={errors?.stepsCount?.message}
        disabled={isLoading}
      />

      <SelectBox
        options={["لايوجد", "متوسط", "عالي"]}
        label={"مستوي الجوع"}
        name="hungerRate"
        register={register}
        validationRules={{ required: "هذا الحقل مطلوب" }}
        error={errors?.hungerRate?.message}
      />

      <SelectBox
        options={["لايوجد", "متوسط", "عالي"]}
        label={"التوتر"}
        name="stress"
        register={register}
        validationRules={{ required: "هذا الحقل مطلوب" }}
        error={errors?.stress?.message}
      />

      <SelectBox
        options={["سيئه", "متوسطه", "جوده عاليه"]}
        label={"النوم"}
        name="sleeping"
        register={register}
        validationRules={{ required: "هذا الحقل مطلوب" }}
        error={errors?.sleeping?.message}
      />

      <SelectBox
        options={["سيئه", "متوسطه", "جوده عاليه"]}
        label={"جوده النوم"}
        name="sleepingQuality"
        register={register}
        validationRules={{ required: "هذا الحقل مطلوب" }}
        error={errors?.sleepingQuality?.message}
      />

      <div className="col-span-1 lg:col-span-2">
        <Button type="submit" variant="tertiary">
          التالي
        </Button>
      </div>
    </form>
  );
}

export default Step1;
