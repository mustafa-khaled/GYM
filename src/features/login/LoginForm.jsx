import { useForm } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../utils/constant";
import { isOnlySpaces } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";

import Button from "../../ui/Button";
import Input from "../../ui/Input";

function LoginForm() {
  const { login, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div className="relative">
      <h1 className="mb-[30px] text-[24px] font-[700] leading-[24px]">
        مرحبا مجددا
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex min-h-[50vh] flex-col justify-center gap-[40px]"
      >
        <Input
          label={"البريد الإلكتروني"}
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
          disabled={isLoading}
        />

        <Input
          label={"كلمة المرور"}
          name="password"
          register={register}
          validationRules={{
            // pattern: {
            //   value: PASSWORD_REGEX,
            //   message: "أدخل كلمة مرور تتضمن 8 أحرف وحرفًا كبيرًا.",
            // },
            required: "هذا الحقل مطلوب",
          }}
          placeholder="كلمه المرور"
          error={errors?.password?.message}
          type="password"
          disabled={isLoading}
        />

        <div className="col-span-1 lg:col-span-2">
          <Button disabled={isLoading} type="submit" variant="tertiary">
            {isLoading ? "يتم التحميل..." : "تسجيل"}
          </Button>
        </div>
      </form>

      <p className="mt-[20px] text-center text-[20px] font-[700] leading-[24px]">
        ليس لديك حساب!{" "}
        <Link to="/signUp" className="text-primary">
          انشاء حساب جديد
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
