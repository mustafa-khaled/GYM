import Button from "../../../ui/Button";

const test = 3;

function MeasurementsHead() {
  return (
    <div className="flex flex-col items-center justify-between gap-[10px] text-center md:flex-row md:text-right">
      <h1 className="text-[20px] font-[700] leading-[24px]">القياسات والصور</h1>
      <div className="leading-[24px]">
        <p className="md:text-[20px]">مده الاشتراك {test}: شهور</p>
        <p className="mt-[10px] flex items-center gap-[10px] font-[600]">
          <span className="w-[150px]">متبقي {test} يوم</span>
          <Button styles={"w-[130px]"}>تجديد الان</Button>
        </p>
        <p className="mt-[10px]">الهدف زياده الوزن</p>
      </div>
    </div>
  );
}

export default MeasurementsHead;
