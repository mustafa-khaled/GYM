import { isOnlySpaces } from "../../../utils/helpers";
import { useAddMeasurement } from "../../../queries/useAddMeasurement";
import { useSubscribeDuration } from "../../../queries/useSubscribeDuration";
import Table from "../../../ui/Table";

function MeasurementsRow({ data }) {
  const { data: userData } = useSubscribeDuration();
  const weekNumber = userData?.current_week || 0;

  const { addMeasurement, isAdding } = useAddMeasurement();

  const handleBlur = (questionId, value) => {
    if (!value || isOnlySpaces(value)) {
      console.error("Invalid input: cannot be empty or only spaces.");
      return;
    }

    addMeasurement({
      question_id: questionId,
      answer: value,
      week_number: weekNumber,
    });
  };

  return (
    <Table.Row>
      <Table.Cell>-</Table.Cell>
      {data?.map((item) => {
        const fieldName = `${item.id}`;

        return (
          <Table.Cell
            key={`cell-${item.id}`}
            style={{ minWidth: "100px", padding: "0", paddingBottom: "5px" }}
          >
            {["text", "number"].includes(item?.measurement?.type) && (
              <input
                type={item?.measurement?.type}
                name={fieldName}
                disabled={isAdding}
                placeholder={item?.measurement?.label || "Enter value"}
                className="m-0 w-full border-none bg-transparent"
                required={item?.is_required}
                onBlur={(e) => handleBlur(item.id, e.target.value)}
              />
            )}
          </Table.Cell>
        );
      })}
    </Table.Row>
  );
}

export default MeasurementsRow;
