import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../../ui/Button";
import GridContainer from "../../ui/GridContainer";
import Input from "../../ui/Input";
import { isOnlySpaces } from "../../utils/helpers";
import { useAddRound } from "../../queries/useAddRound";
import { useEditRound } from "../../queries/useEditRound";

const initialState = {
  repeat: "",
  weight: "",
  set: "",
};

export default function AddEditRoundForm({ roundToEdit, onCloseModal }) {
  const isEditingSession = Boolean(roundToEdit);

  const { addRound, isAddingRound } = useAddRound();
  const { editRound, isEditingRound } = useEditRound();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isEditingSession
      ? {
          repeat: roundToEdit?.repeat,
          weight: roundToEdit?.weight,
          set: roundToEdit?.set,
          note: roundToEdit?.note,
        }
      : initialState,
    mode: "onChange",
  });

  const isWorking = isEditingRound || isAddingRound;

  function onSubmit(data) {
    if (isEditingSession) {
      editRound(data, {
        onSuccess: () => {
          toast.success("تم تعديل الجولة بنجاح");
          onCloseModal?.();
          reset();
        },
        onError: () => {
          toast.error("حدث خطأ أثناء تعديل الجولة");
        },
      });
    } else {
      addRound(data, {
        onSuccess: () => {
          toast.success("تم إضافة الجولة بنجاح");
          onCloseModal?.();
          reset();
        },
        onError: () => {
          toast.error("حدث خطأ أثناء إضافة الجولة");
        },
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-textColor mt-[20px] flex flex-col gap-[15px]"
    >
      <h1 className="text-xl font-semibold lg:text-2xl">
        {isEditingSession ? "تعديل الجولة" : "إضافة جولة"}
      </h1>

      <GridContainer>
        <Input
          name="repeat"
          placeholder="عدد التكرار"
          disabled={isWorking}
          error={errors?.repeat?.message}
          register={register}
          validationRules={{
            required: "هذا الحقل مطلوب",

            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "لا يجب أن يحتوي على مسافات فقط",
            },
          }}
        />

        <Input
          name="weight"
          placeholder="الوزن"
          disabled={isWorking}
          error={errors?.weight?.message}
          register={register}
          validationRules={{
            required: "هذا الحقل مطلوب",

            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "لا يجب أن يحتوي على مسافات فقط",
            },
          }}
        />
        <Input
          name="set"
          placeholder="المجموعة"
          disabled={isWorking}
          error={errors?.set?.message}
          register={register}
          validationRules={{
            required: "هذا الحقل مطلوب",

            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "لا يجب أن يحتوي على مسافات فقط",
            },
          }}
        />

        {isEditingSession && (
          <Input
            name="note"
            placeholder="ملاحظة"
            disabled={isWorking}
            error={errors?.note?.message}
            register={register}
            validationRules={{
              required: "هذا الحقل مطلوب",

              validate: {
                noOnlySpaces: (value) =>
                  !isOnlySpaces(value) || "لا يجب أن يحتوي على مسافات فقط",
              },
            }}
          />
        )}
      </GridContainer>

      <div className="mt-[20px] w-[80px] self-end">
        <Button type="submit" disabled={isWorking}>
          {isEditingSession ? "تعديل" : "إضافة"}
        </Button>
      </div>
    </form>
  );
}
