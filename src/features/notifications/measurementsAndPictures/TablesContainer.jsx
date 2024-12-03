import { useSubscribeDuration } from "../../../queries/useSubscribeDuration";
import MeasurementsTable from "./MeasurementsTable";
import TableTitle from "./TableTitle";

function TablesContainer({ tableData }) {
  const { data } = useSubscribeDuration();

  return (
    <div className="flex w-full flex-col gap-[20px] lg:w-[60%]">
      <TableTitle />
      <MeasurementsTable
        title={`قياس الاسبوع ${data?.current_week || 0}`}
        data={tableData}
        type="first"
      />
      <MeasurementsTable title="معدل التطور" data={tableData} />
    </div>
  );
}

export default TablesContainer;
