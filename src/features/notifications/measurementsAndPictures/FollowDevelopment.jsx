import { useNotificationsMeasurements } from "../../../queries/useNotificationsMeasurements";
import ImagesContainer from "./ImagesContainer";
import TablesContainer from "./TablesContainer";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/spinner/Spinner";

function FollowDevelopment() {
  const { isLoading, notificationsMeasurements } =
    useNotificationsMeasurements();

  if (isLoading) return <Spinner />;
  if (!notificationsMeasurements?.length)
    return <Empty message={"فشل في عرض البيانات."} />;

  return (
    <div className="mt-[20px] flex flex-col items-start gap-[20px] lg:flex-row">
      <TablesContainer />
      <ImagesContainer />
    </div>
  );
}

export default FollowDevelopment;
