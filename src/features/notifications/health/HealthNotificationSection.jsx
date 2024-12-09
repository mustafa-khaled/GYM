import { useQuestionEvaluation } from "../../../queries/useQuestionEvaluation";
import { useSubscribeDuration } from "../../../queries/useSubscribeDuration";

import { IoIosArrowDown } from "react-icons/io";
import HealthTable from "./HealthTable";
import TableTitle from "./TableTitle";

const twoBtnStyles =
  "flex items-center gap-[10px] bg-[#FFFFFF] text-[#000] p-[10px] font-[600] rounded-md cursor-pointer";

function HealthNotificationSection() {
  const { data: userData } = useSubscribeDuration();

  const { data } = useQuestionEvaluation({
    currentWeek: userData?.current_week,
  });

  return (
    <div className="bg-bg_color p-[20px]">
      <TableTitle />
      <div className="mb-[20px] flex items-center justify-between gap-[15px] sm:justify-start">
        <h2 className="font-[700] leading-[24px] md:text-[20px]">
          متابعه التطور
        </h2>
        <div className="flex flex-col items-center gap-[10px] sm:flex-row">
          <span className={`${twoBtnStyles}`}>
            الاسبوع الحالي
            <IoIosArrowDown />
          </span>
        </div>
      </div>

      <HealthTable data={data} />
    </div>
  );
}

export default HealthNotificationSection;
