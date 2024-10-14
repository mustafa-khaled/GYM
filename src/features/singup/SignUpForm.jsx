import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";

const MultiStepForm = () => {
  const methods = useForm();
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
    <FormProvider {...methods}>
      <section className="relative text-[#fff]">
        <h1 className="mb-[30px] text-[24px] font-[700] leading-[24px]">
          {step === 1 && "معلومات صحيه ولياقيه:"}
          {step === 2 && "البيانات الاساسيه"}
        </h1>
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && (
          <Step2 previousStep={previousStep} submitForm={submitForm} />
        )}

        <p className="mt-[20px] text-center text-[20px] font-[700] leading-[24px]">
          لديك حساب بالفعل{" "}
          <Link to="/login" className="text-primary">
            سجل
          </Link>
        </p>
      </section>
    </FormProvider>
  );
};

export default MultiStepForm;
