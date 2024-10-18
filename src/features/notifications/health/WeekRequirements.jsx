import { useForm } from "react-hook-form";
import SelectBox from "../../../ui/SelectBox";

function WeekRequirements() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="my-[20px]">
      <SelectBox
        options={["two", "one"]}
        label={"متطلبات الاسبوع"}
        name="weekRequirements"
        register={register}
        validationRules={{ required: "هذا الحقل مطلوب" }}
        error={errors?.weekRequirements?.message}
        styles={" bg-[#FFFFFF29] text-[#fff]"}
      />
    </div>
  );
}

export default WeekRequirements;
