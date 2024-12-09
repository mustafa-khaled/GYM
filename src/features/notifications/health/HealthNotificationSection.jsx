import { useQuestionEvaluation } from "../../../queries/useQuestionEvaluation";
import { useSubscribeDuration } from "../../../queries/useSubscribeDuration";

import HealthTable from "./HealthTable";
import TableTitle from "../TableTitle";

function HealthNotificationSection() {
  const { data: userData } = useSubscribeDuration();

  const { data } = useQuestionEvaluation({
    currentWeek: userData?.current_week,
  });

  return (
    <div className="bg-bg_color p-[20px]">
      <TableTitle />

      <HealthTable data={data} />
    </div>
  );
}

export default HealthNotificationSection;
