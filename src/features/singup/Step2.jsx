import { useFormContext } from "react-hook-form";
import { EMAIL_REGEX } from "../../utils/constant";
import { isOnlySpaces } from "../../utils/helpers";

import Button from "../../ui/Button";
import Input from "../../ui/Input";

function Step2({ previousStep, submitForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useFormContext();

  const onSubmit = (data) => {
    submitForm(data);
  };

  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid min-h-[70vh] grid-cols-1 gap-[20px] lg:grid-cols-2"
    >
      <Input
        label={"الأسم بالكامل (الاسم الأول واسم العائلة)"}
        name="name"
        register={register}
        validationRules={{
          validate: {
            noOnlySpaces: (value) => !isOnlySpaces(value) || "حقل غير صالح",
          },
          required: "هذا الحقل مطلوب",
        }}
        placeholder="الاسم بالكامل"
        error={errors?.name?.message}
      />

      <Input
        label={"البريد الإلكتروني (لتواصل المعلومات أو تأكيد التسجيل)"}
        name="email"
        register={register}
        validationRules={{
          required: "هذا الحقل مطلوب",
          pattern: {
            value: EMAIL_REGEX,
            message: "بريد الكتروني غير صالح",
          },
        }}
        placeholder="البريد الالكتروني"
        error={errors?.email?.message}
      />

      <Input
        label={"كلمة المرور: (لإنشاء حساب آمن)"}
        name="password"
        register={register}
        validationRules={{
          validate: {
            noOnlySpaces: (value) => !isOnlySpaces(value) || "حقل غير صالح",
          },
          required: "هذا الحقل مطلوب",
        }}
        placeholder="كلمه المرور"
        error={errors?.password?.message}
        type="password"
      />

      <Input
        label={"تأكيد كلمة المرور: (للتأكد من عدم وجود أخط"}
        name="confirmPassword"
        register={register}
        validationRules={{
          required: "هذا الحقل مطلوب",
          validate: (value) => value === password || "كلمه المرور غير متطابقه",
        }}
        placeholder="تأكيد كلمه المرور"
        error={errors?.confirmPassword?.message}
        type="password"
      />

      <div className="col-span-1 lg:col-span-2">
        <Button type="submit" variant="tertiary">
          تسجيل
        </Button>
      </div>
    </form>
  );
}

export default Step2;
