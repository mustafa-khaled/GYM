import MeasurementsTable from "./MeasurementsTable";
import TableTitle from "../TableTitle";

function TablesContainer({ tableData, weekNumber }) {
  return (
    <div className="flex w-full flex-col gap-[20px] lg:w-[60%]">
      <TableTitle />
      <MeasurementsTable
        title={`قياس الاسبوع ${weekNumber}`}
        data={tableData}
        type="first"
      />
      <MeasurementsTable title="معدل التطور" data={tableData} />
    </div>
  );
}

export default TablesContainer;
