import { useSubscribeDuration } from "../../../queries/useSubscribeDuration";
import Button from "../../../ui/Button";
import WeeklyImagesForm from "./WeeklyImagesForm";

function WeeklyNotificationsSection() {
  const { data } = useSubscribeDuration();

  return (
    <>
      <div className="flex items-center justify-between gap-[20px]">
        <div className="w-[115px]">
          <Button
            disabled={data?.current_week <= 0}
            AriaLabel="previous"
            variant="tertiary"
            styles="!bg-[#000] !text-[#fff]"
          >
            السابق
          </Button>
        </div>
        <div className="w-[115px]">
          <Button
            AriaLabel="week"
            variant="tertiary"
            styles="!bg-[#000] !text-primary  cursor-default"
          >
            الاسبوع {data?.current_week || 0}
          </Button>
        </div>
      </div>

      <WeeklyImagesForm />
    </>
  );
}

export default WeeklyNotificationsSection;
