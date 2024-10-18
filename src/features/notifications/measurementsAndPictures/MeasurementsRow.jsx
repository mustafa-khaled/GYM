import Table from "../../../ui/Table";

function MeasurementsRow({ item }) {
  return (
    <Table.Row key={item?.date}>
      <Table.Cell>-</Table.Cell>
      <Table.Cell>-</Table.Cell>
      <Table.Cell>-</Table.Cell>
      <Table.Cell>-</Table.Cell>
      <Table.Cell>-</Table.Cell>
      <Table.Cell>-</Table.Cell>
      <Table.Cell>-</Table.Cell>
      <Table.Cell></Table.Cell>
    </Table.Row>
  );
}

export default MeasurementsRow;
