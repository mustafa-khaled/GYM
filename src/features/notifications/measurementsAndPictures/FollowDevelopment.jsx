import { useNotificationsMeasurements } from "../../../queries/useNotificationsMeasurements";
import { useSubscribeDuration } from "../../../queries/useSubscribeDuration";
import ImagesContainer from "./ImagesContainer";
import TablesContainer from "./TablesContainer";
import Spinner from "../../../ui/spinner/Spinner";

function FollowDevelopment() {
  const { isLoading, notificationsMeasurements } =
    useNotificationsMeasurements();
  const { data } = useSubscribeDuration();
  const weekNumber = data?.current_week || 0;

  if (isLoading) return <Spinner className="!h-[20vh] w-full" />;
  if (!notificationsMeasurements?.length)
    return (
      <div className="mx-auto mt-5 flex w-[90%] flex-col gap-[10px] rounded-md bg-[#323232d6] p-[10px] text-center md:w-[450px]">
        لا يوجد بيانات لعرضها.
      </div>
    );

  const imageMeasurements = notificationsMeasurements.filter(
    (item) => item.measurement.type === "image",
  );

  const nonImageMeasurements = notificationsMeasurements.filter(
    (item) => item.measurement.type !== "image",
  );

  return (
    <div className="mt-[20px] flex flex-col items-start gap-[20px] lg:flex-row">
      <TablesContainer
        tableData={nonImageMeasurements}
        weekNumber={weekNumber}
      />
      <ImagesContainer images={imageMeasurements} />
    </div>
  );
}

export default FollowDevelopment;
