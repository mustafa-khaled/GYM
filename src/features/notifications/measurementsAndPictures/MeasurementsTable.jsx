import Table from "../../../ui/Table";
import MeasurementsRow from "./MeasurementsRow";
import RateOfDevelopmentRow from "./RateOfDevelopmentRow";

function MeasurementsTable({ data, title, type }) {
  return (
    <Table>
      <Table.Header>
        <Table.Cell isHeader styles={"bg-primary text-[#000]"}>
          {title}
        </Table.Cell>
        {data?.map((item) => (
          <Table.Cell isHeader key={`header-${item?.id}`}>
            {item?.measurement?.name}
          </Table.Cell>
        ))}
      </Table.Header>
      <Table.Body
        data={[data]}
        render={(rowData, index) =>
          type === "first" ? (
            <MeasurementsRow data={rowData} key={`row-${index}`} />
          ) : (
            <RateOfDevelopmentRow data={rowData} key={`row-${index}`} />
          )
        }
      />
    </Table>
  );
}

export default MeasurementsTable;
