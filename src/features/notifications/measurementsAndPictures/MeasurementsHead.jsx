import SubscriptionDetails from "../SubscriptionDetails";

function MeasurementsHead() {
  return (
    <div className="flex flex-col items-center justify-between gap-[10px] text-center md:flex-row md:text-right">
      <h1 className="text-[20px] font-[700] leading-[24px]">القياسات والصور</h1>
      <SubscriptionDetails />
    </div>
  );
}

export default MeasurementsHead;
