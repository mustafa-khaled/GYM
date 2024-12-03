import { useFormContext } from "react-hook-form";
import Input from "../../../ui/Input";
import Table from "../../../ui/Table";
import { isOnlySpaces } from "../../../utils/helpers";

function MeasurementsRow({ data }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Table.Row>
      <Table.Cell>-</Table.Cell>
      {data?.map((item) => {
        const fieldName = item?.measurement?.name;

        return (
          <Table.Cell
            key={`cell-${item?.id}`}
            styles="min-w-[100px] !p-0 !pb-[5px]"
          >
            {["text", "number"].includes(item?.measurement?.type) && (
              <Input
                Styles="!bg-transparent !border-0 !mt-0"
                name={fieldName}
                register={register}
                validationRules={{
                  required: item?.is_required ? "هذا الحقل مطلوب" : false,
                  validate: {
                    noOnlySpaces: (value) =>
                      !isOnlySpaces(value) || "لا يجب أن يحتوي على مسافات فقط",
                    ...(item?.question?.type === "number" && {
                      isNumber: (value) =>
                        (value && !isNaN(value)) || "يجب أن يكون رقمًا",
                    }),
                  },
                }}
                placeholder={fieldName}
                error={errors?.[fieldName]?.message}
              />
            )}
          </Table.Cell>
        );
      })}
    </Table.Row>
  );
}

export default MeasurementsRow;
