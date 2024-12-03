import Table from "../../../ui/Table";

function RateOfDevelopmentRow({ data }) {
  return (
    <Table.Row>
      <Table.Cell>-</Table.Cell>
      {data?.map((item) => (
        <Table.Cell key={`cell-${item?.id}`} styles="min-w-[100px]">
          -
        </Table.Cell>
      ))}
    </Table.Row>
  );
}

export default RateOfDevelopmentRow;
