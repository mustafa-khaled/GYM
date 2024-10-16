import { PiDotsThreeCircleVertical } from "react-icons/pi";
import DailyNotificationForm from "./DailyNotificationForm";

function UserDailyProgress() {
  return (
    <div className="rounded-sm bg-[#000] p-[20px]">
      <div className="mb-[30px] text-center">
        <h1 className="text-[24px] font-[700] leading-[24px]">
          صفحه المتدرب ومتابعه التطور
        </h1>
        <p className="mt-[20px] flex items-start font-[600] leading-[24px]">
          <PiDotsThreeCircleVertical className="ml-2 text-3xl" />
          <span className="block w-full self-start">
            الإجابة يوميا على الأسئلة، يساعدنا على قياس التطورات والمتغبرات كل
            أسبوعين
          </span>
        </p>
      </div>

      <DailyNotificationForm />
    </div>
  );
}

export default UserDailyProgress;
