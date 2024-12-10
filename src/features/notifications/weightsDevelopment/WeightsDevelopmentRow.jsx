import Table from "../../../ui/Table";

function WeightsDevelopmentRow({ item }) {
  const hasRounds = item?.rounds && item?.rounds?.length > 0;

  return (
    <>
      {hasRounds ? (
        item?.rounds.map((round, index) => (
          <Table.Row key={index}>
            {index === 0 && (
              <>
                <Table.Cell rowSpan={item?.rounds?.length}>
                  {item?.name}
                </Table.Cell>
                <Table.Cell rowSpan={item?.rounds?.length}>
                  {item?.muscle}
                </Table.Cell>
              </>
            )}
            <Table.Cell>{round?.weight}</Table.Cell>
            <Table.Cell>{round?.repeat}</Table.Cell>
          </Table.Row>
        ))
      ) : (
        <Table.Row>
          <Table.Cell>{item?.name}</Table.Cell>
          <Table.Cell>{item?.muscle}</Table.Cell>
          <Table.Cell>-</Table.Cell>
          <Table.Cell>-</Table.Cell>
        </Table.Row>
      )}
    </>
  );
}

export default WeightsDevelopmentRow;
