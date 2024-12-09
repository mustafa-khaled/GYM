import { useForm, FormProvider } from "react-hook-form";
import { useNotificationsMeasurements } from "../../../queries/useNotificationsMeasurements";
import { useAddMeasurement } from "../../../queries/useAddMeasurement";
import { useSubscribeDuration } from "../../../queries/useSubscribeDuration";
import ImagesContainer from "./ImagesContainer";
import TablesContainer from "./TablesContainer";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/spinner/Spinner";
import Button from "../../../ui/Button";

function FollowDevelopment() {
  const { isLoading, notificationsMeasurements } =
    useNotificationsMeasurements();
  const { addMeasurement, isAdding } = useAddMeasurement();
  const { data } = useSubscribeDuration();
  const weekNumber = data?.current_week || 0;

  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (formData) => {
    const transformedData = Object.entries(formData).map(([key, value]) => ({
      question_id: parseInt(key, 10), // Ensure question_id is a number
      answer: value, // Include the user's answer
    }));

    addMeasurement({
      ...transformedData,
      week_number: weekNumber,
    });
  };

  if (isLoading) return <Spinner className="!h-[5vh] w-full" />;
  if (!notificationsMeasurements?.length)
    return <Empty message={"فشل في عرض البيانات."} />;

  const imageMeasurements = notificationsMeasurements.filter(
    (item) => item.measurement.type === "image",
  );

  const nonImageMeasurements = notificationsMeasurements.filter(
    (item) => item.measurement.type !== "image",
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[20px] flex flex-col items-center gap-[20px] lg:flex-row">
          <TablesContainer
            tableData={nonImageMeasurements}
            weekNumber={weekNumber}
          />
          <ImagesContainer images={imageMeasurements} />
        </div>
        <div className="ms-auto mt-[20px] w-full md:w-1/4">
          <Button type="submit" disabled={isLoading || isAdding}>
            ارسال
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default FollowDevelopment;
