import Table from "../../../ui/Table";
import MeasurementsRow from "./MeasurementsRow";

function MeasurementsTable({ data, title }) {
  return (
    <Table>
      <Table.Header>
        <Table.Cell isHeader styles={"bg-primary text-[#000]"}>
          {title}
        </Table.Cell>
        <Table.Cell isHeader>محيط الصدر</Table.Cell>
        <Table.Cell isHeader>البطن علي السره</Table.Cell>
        <Table.Cell isHeader>محيط الارداف</Table.Cell>
        <Table.Cell isHeader>الزراع الايمن</Table.Cell>
        <Table.Cell isHeader>الزراع الايسر</Table.Cell>
        <Table.Cell isHeader>الفخذ الايسر</Table.Cell>
        <Table.Cell isHeader>الفخذ الايمن</Table.Cell>
      </Table.Header>
      <Table.Body
        data={data}
        render={(item) => <MeasurementsRow item={item} key={item?.date} />}
      />
    </Table>
  );
}

export default MeasurementsTable;
