import Table from "../../../ui/Table";

function WeightsDevelopmentRow({ item }) {
  return (
    <>
      <Table.Row>
        <Table.Cell rowSpan={1}>التمرين</Table.Cell>
        <Table.Cell rowSpan={1}>العضله المستهدفه</Table.Cell>
        <Table.Cell>{item.weight1}</Table.Cell>
        <Table.Cell>{item.reps1}</Table.Cell>
      </Table.Row>
    </>
  );
}

export default WeightsDevelopmentRow;
