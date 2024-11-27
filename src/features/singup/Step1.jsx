import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Controller, useFormContext } from "react-hook-form";
import { useGoals } from "../../queries/useGoals";
import { useMedicalIssues } from "../../queries/useMedicalIssues";

import Button from "../../ui/Button";
import Choose from "../../ui/Choose";

function Step1({ nextStep }) {
  const { MedicalIssueLoading, medicalIssues } = useMedicalIssues();
  const { goalsLoading, goals } = useGoals();
  const isDisabled = MedicalIssueLoading || goalsLoading;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext();

  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked((prev) => !prev);

  const onSubmit = (data) => {
    if (!Object.keys(errors).length) {
      nextStep(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid min-h-[70vh] grid-cols-1 gap-[20px] lg:grid-cols-2"
    >
      <Controller
        name="gender"
        control={control}
        rules={{ required: " هذا الحقل مطلوب" }}
        render={({ field }) => (
          <Choose
            {...field}
            options={[
              {
                value: "male",
                label: "ذكر",
              },
              {
                value: "female",
                label: "انثي",
              },
            ]}
            label={"النوع"}
            error={errors?.gender?.message}
          />
        )}
      />

      <Controller
        name="goal"
        control={control}
        rules={{ required: " هذا الحقل مطلوب" }}
        render={({ field }) => (
          <Choose
            isLoading={goalsLoading}
            disabled={isDisabled}
            isMulti={true}
            {...field}
            options={goals || []}
            label={
              "الأهداف الشخصية: (خسارة وزن، بناء عضلات، تحسين اللياقة العامة)"
            }
            error={errors?.goal?.message}
          />
        )}
      />

      <div className="col-span-1 lg:col-span-2">
        <Controller
          name="medicalCondition"
          control={control}
          rules={{ required: " هذا الحقل مطلوب" }}
          render={({ field }) => (
            <Choose
              isLoading={MedicalIssueLoading}
              isMulti={true}
              disabled={isDisabled}
              {...field}
              options={medicalIssues || []}
              label={
                "الحالات الطبية: (إذا كانت هناك أي أمراض أو مشاكل صحية يجب معرفتها)"
              }
              error={errors?.medicalCondition?.message}
            />
          )}
        />
      </div>

      <div className="flex flex-col gap-[10px]">
        <h3 className="text-[20px] font-[700] leading-[24px]">
          الإقرار بالموافقة:
        </h3>
        <p className="text-[14px] font-[600] leading-[24px] text-slate-300">
          قبول الشروط والأحكام: (يجب أن يوافق المستخدم على شروط الاستخدام) سياسة
          الخصوصية: (يجب أن يوافق المستخدم على سياسة الخصوصية)
        </p>
        <div className="flex items-center gap-[5px]" onClick={toggleChecked}>
          <div
            className={`flex h-4 w-4 items-center justify-center rounded-sm text-sm ${
              checked ? "bg-primary" : "bg-slate-100"
            } text-[#000]`}
          >
            <FaCheck />
          </div>
          <label>أوافق</label>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-2">
        <Button
          AriaLabel="nextStepInSignup"
          type="submit"
          variant="tertiary"
          disabled={isDisabled}
        >
          التالي
        </Button>
      </div>
    </form>
  );
}

export default Step1;
