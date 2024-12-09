import { useFormContext } from "react-hook-form";
import { isOnlySpaces } from "../../../utils/helpers";
import Input from "../../../ui/Input";
import Table from "../../../ui/Table";

function MeasurementsRow({ data }) {
  const { register } = useFormContext();

  return (
    <Table.Row>
      <Table.Cell>-</Table.Cell>
      {data?.map((item) => {
        const fieldName = `${item.id}`; // Use the question ID as the field name for the answer

        return (
          <Table.Cell
            key={`cell-${item.id}`}
            styles="min-w-[100px] !p-0 !pb-[5px]"
          >
            {["text", "number"].includes(item?.measurement?.type) && (
              <Input
                Styles="!bg-transparent !border-0 !mt-0"
                name={fieldName} // Register input with question ID as the name
                register={register}
                validationRules={{
                  required: item?.is_required ? "هذا الحقل مطلوب" : false,
                  validate: {
                    noOnlySpaces: (value) =>
                      !isOnlySpaces(value) || "لا يجب أن يحتوي على مسافات فقط",
                    ...(item?.measurement?.type === "number" && {
                      isNumber: (value) =>
                        (value && !isNaN(value)) || "يجب أن يكون رقمًا",
                    }),
                  },
                }}
                placeholder={item?.measurement?.label || "Enter value"}
              />
            )}
          </Table.Cell>
        );
      })}
    </Table.Row>
  );
}

export default MeasurementsRow;
