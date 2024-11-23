import { useForm } from "react-hook-form";
import { isOnlySpaces } from "../../utils/helpers";
import { EMAIL_REGEX, NUMBER_INPUT_REGEX } from "../../utils/constant";
import { useAddContact } from "../../queries/useAddContact";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import GridContainer from "../../ui/GridContainer";
import TextArea from "../../ui/TextArea";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactUsForm() {
  const { addContact, isAddingContact } = useAddContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
    mode: "onChange",
  });

  const isWorking = isAddingContact;

  function onSubmit(data) {
    addContact(data, {
      onSuccess: () => {
        reset();
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[15px]"
    >
      <Input
        label="الاسم"
        name="name"
        placeholder="الاسم"
        disabled={isWorking}
        error={errors?.name?.message}
        register={register}
        validationRules={{
          required: "هذا الحقل مطلوب",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "لا يجب أن يحتوي على مسافات فقط",
          },
        }}
      />

      <GridContainer>
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
          disabled={isWorking}
        />

        <Input
          label="الهاتف"
          name="phone"
          placeholder="الهاتف"
          disabled={isWorking}
          error={errors?.phone?.message}
          register={register}
          validationRules={{
            required: "هذا الحقل مطلوب",
            pattern: {
              value: NUMBER_INPUT_REGEX,
              message: "ارقام فقط",
            },
          }}
        />
      </GridContainer>

      <TextArea
        label="الرسالة"
        name="message"
        placeholder="الرسالة"
        disabled={isWorking}
        error={errors?.message?.message}
        register={register}
        validationRules={{
          required: "هذا الحقل مطلوب",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "لا يجب أن يحتوي على مسافات فقط",
          },
        }}
      />

      <div className="mt-[20px] w-full">
        <Button
          AriaLabel="sendContacts"
          type="submit"
          disabled={isWorking}
          styles={"relative"}
        >
          ارسال
        </Button>
      </div>
    </form>
  );
}
