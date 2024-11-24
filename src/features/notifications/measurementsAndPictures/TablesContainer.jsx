import { useSubscribeDuration } from "../../../queries/useSubscribeDuration";
import MeasurementsTable from "./MeasurementsTable";
import TableTitle from "./TableTitle";

const data1 = [{ date: "1" }];
const data2 = [{ date: "1" }];

function TablesContainer() {
  const { data } = useSubscribeDuration();

  return (
    <div className="flex w-full flex-col gap-[20px] lg:w-[60%]">
      <TableTitle />
      <MeasurementsTable
        title={`قياس الاسبوع ${data?.current_week || 0}`}
        data={data1}
      />
      <MeasurementsTable title="معدل التطور" data={data2} />
    </div>
  );
}

export default TablesContainer;
