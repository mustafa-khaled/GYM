import { Controller, useForm } from "react-hook-form";
import { isOnlySpaces } from "../../utils/helpers";
import { useAddRound } from "../../queries/useAddRound";
import { useEditRound } from "../../queries/useEditRound";
import { useParams } from "react-router-dom";
import { NUMBER_INPUT_REGEX } from "../../utils/constant";
import Button from "../../ui/Button";
import GridContainer from "../../ui/GridContainer";
import Input from "../../ui/Input";
import Choose from "../../ui/Choose";

const initialState = {
  repeat: null,
  weight: "",
  set: "",
};

const repeatedOptions = [
  {
    value: "8",
    label: "8",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "12",
    label: "12 || +12",
  },
];

export default function AddEditRoundForm({ roundToEdit, onCloseModal }) {
  const isEditingSession = Boolean(roundToEdit);

  const { exerciseId } = useParams();
  const { addRound, isAddingRound } = useAddRound();
  const { editRound, isEditingRound } = useEditRound();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: isEditingSession
      ? {
          repeat: repeatedOptions.find(
            (option) => option.value === roundToEdit?.repeat?.toString(),
          ),
          weight: roundToEdit?.weight,
          set: roundToEdit?.set,
          note: roundToEdit?.note,
        }
      : initialState,
    mode: "onChange",
  });

  const isWorking = isEditingRound || isAddingRound;

  function onSubmit(data) {
    const finalData = { ...data, repeat: data.repeat?.value };
    if (isEditingSession) {
      editRound(
        { roundId: roundToEdit.id, finalData },
        {
          onSuccess: () => {
            onCloseModal?.();
            reset();
          },
        },
      );
    } else {
      addRound(
        { exerciseId, finalData },
        {
          onSuccess: () => {
            onCloseModal?.();
            reset();
          },
        },
      );
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
        <Controller
          name="repeat"
          control={control}
          rules={{ required: " هذا الحقل مطلوب" }}
          render={({ field }) => (
            <Choose
              field={field}
              disabled={isWorking}
              options={repeatedOptions}
              label={"عدد التكرار"}
              error={errors?.repeat?.message}
            />
          )}
        />

        <Input
          label="الوزن"
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

            pattern: {
              value: NUMBER_INPUT_REGEX,
              message: "هذا الحقل يجب أن يحتوي علي أرقام فقط",
            },
          }}
        />
        <Input
          label="المجموعة"
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

            pattern: {
              value: NUMBER_INPUT_REGEX,
              message: "هذا الحقل يجب أن يحتوي علي أرقام فقط",
            },
          }}
        />

        {isEditingSession && (
          <Input
            label="ملاحظة"
            name="note"
            placeholder="ملاحظة"
            disabled={isWorking}
            error={errors?.note?.message}
            register={register}
            validationRules={{
              validate: {
                noOnlySpaces: (value) =>
                  !isOnlySpaces(value) || "لا يجب أن يحتوي على مسافات فقط",
              },
            }}
          />
        )}
      </GridContainer>

      <div className="mt-[20px] w-[80px] self-end">
        <Button
          AriaLabel={isEditingSession ? "editRound" : "addRound"}
          type="submit"
          disabled={isWorking}
        >
          {isEditingSession ? "تعديل" : "إضافة"}
        </Button>
      </div>
    </form>
  );
}
