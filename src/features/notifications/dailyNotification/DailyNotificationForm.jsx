import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";

function DailyNotificationForm() {
  const methods = useForm();
  const isLoading = false;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const previousStep = () => setStep(step - 1);

  const submitForm = (data) => {
    const finalData = { ...formData, ...data };
    console.log("Final Form Data:", finalData);
  };

  return (
    <div>
      <FormProvider {...methods}>
        {step === 1 && <Step1 nextStep={nextStep} isLoading={isLoading} />}
        {step === 2 && (
          <Step2
            isLoading={isLoading}
            previousStep={previousStep}
            submitForm={submitForm}
          />
        )}
      </FormProvider>
      <div className="h-[8px] rounded-md bg-[#ccc]">
        <p
          className={`mr-auto h-[8px] ${step === 1 ? "w-[50%]" : "w-[100%]"} mt-[20px] bg-primary`}
        ></p>
      </div>
    </div>
  );
}

export default DailyNotificationForm;
