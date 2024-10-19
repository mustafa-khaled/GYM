import Table from "../../../ui/Table";
import WeightsDevelopmentRow from "./WeightsDevelopmentRow";

function WeightsDevelopmentTable({ data }) {
  return (
    <Table>
      <Table.Header>
        <Table.Cell isHeader styles={"bg-primary text-[#000]"}>
          التمرين
        </Table.Cell>
        <Table.Cell isHeader styles={"bg-primary text-[#000]"}>
          العضله المستهدفه
        </Table.Cell>

        <Table.Cell isHeader styles={"bg-primary text-[#000]"}>
          الوزن
        </Table.Cell>

        <Table.Cell isHeader styles={"bg-primary text-[#000]"}>
          التكرار
        </Table.Cell>
      </Table.Header>
      <Table.Body
        data={data}
        render={(item) => (
          <WeightsDevelopmentRow item={item} key={item?.date} />
        )}
      />
    </Table>
  );
}

export default WeightsDevelopmentTable;
