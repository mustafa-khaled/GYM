import { Controller, useForm } from "react-hook-form";
import Choose from "../../../ui/Choose";

const weekRequirementsOptions = [
  { value: "one", label: "one" },
  { value: "two", label: "two" },
];

function WeekRequirements() {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <div className="my-[20px]">
      <Controller
        name="weekRequirements"
        control={control}
        rules={{ required: " هذا الحقل مطلوب" }}
        render={({ field }) => (
          <Choose
            field={field}
            options={weekRequirementsOptions || []}
            label={"متطلبات الاسبوع"}
            error={errors?.weekRequirements?.message}
          />
        )}
      />
    </div>
  );
}

export default WeekRequirements;
