import Table from "../../../ui/Table";

function WeightsDevelopmentRow({ item }) {
  return (
    <>
      <Table.Row>
        <Table.Cell rowSpan={1}>{item?.name}</Table.Cell>
        <Table.Cell rowSpan={1}>{item?.muscle}</Table.Cell>
        <Table.Cell>-</Table.Cell>
        <Table.Cell>-</Table.Cell>
      </Table.Row>
    </>
  );
}

export default WeightsDevelopmentRow;
