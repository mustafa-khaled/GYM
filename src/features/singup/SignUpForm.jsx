import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa6";
import Button from "../../ui/Button";
import SelectBox from "../../ui/SelectBox";

function SignUpForm() {
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleChecked = () => setChecked((prev) => !prev);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="relative text-[#fff]">
      <h1 className="mb-[30px] text-[24px] font-[700] leading-[24px]">
        معلومات صحيه ولياقيه:
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid h-[70vh] grid-cols-1 gap-[20px] lg:grid-cols-2"
      >
        <SelectBox
          options={["ذكر", "انثي"]}
          label={"النوع"}
          name="gender"
          register={register}
          validationRules={{ required: "هذا الحقل مطلوب" }}
          error={errors?.gender?.message}
        />
        <SelectBox
          options={["خسارة وزن", "بناء عضلات", "تحسين اللياقة العامة"]}
          label={
            "الأهداف الشخصية: (خسارة وزن، بناء عضلات، تحسين اللياقة العامة)"
          }
          name="goal"
          register={register}
          validationRules={{ required: "هذا الحقل مطلوب" }}
          error={errors?.goal?.message}
        />

        <div className="col-span-1 lg:col-span-2">
          <SelectBox
            options={["لايوجد مرض", "لدي مرض"]}
            label={
              "الحالات الطبية: (إذا كانت هناك أي أمراض أو مشاكل صحية يجب معرفتها)"
            }
            name="medicalCondition"
            register={register}
            validationRules={{ required: "هذا الحقل مطلوب" }}
            error={errors?.medicalCondition?.message}
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[20px] font-[700] leading-[24px]">
            الإقرار بالموافقة:
          </h3>
          <p className="text-[14px] font-[600] leading-[24px] text-slate-300">
            قبول الشروط والأحكام: (يجب أن يوافق المستخدم على شروط الاستخدام)
            سياسة الخصوصية: (يجب أن يوافق المستخدم على سياسة الخصوصية)
          </p>
          <div className="flex items-center gap-[5px]" onClick={toggleChecked}>
            <div
              className={`flex h-4 w-4 items-center justify-center rounded-sm text-sm ${checked ? "bg-primary" : "bg-slate-100"} text-[#000]`}
            >
              <FaCheck />
            </div>
            <label>أوافق</label>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <Button type="submit" variant="tertiary">
            التالي
          </Button>
        </div>
      </form>
    </section>
  );
}

export default SignUpForm;
