import { useForm, FormProvider } from "react-hook-form";
import ImagesContainer from "./ImagesContainer";
import TablesContainer from "./TablesContainer";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/spinner/Spinner";
import Button from "../../../ui/Button";
import { useNotificationsMeasurements } from "../../../queries/useNotificationsMeasurements";

function FollowDevelopment() {
  const { isLoading, notificationsMeasurements } =
    useNotificationsMeasurements();

  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  if (isLoading) return <Spinner />;
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
          <TablesContainer tableData={nonImageMeasurements} />
          <ImagesContainer images={imageMeasurements} />
        </div>
        <div className="ms-auto mt-[20px] w-full md:w-1/4">
          <Button type="submit" disabled={isLoading}>
            ارسال
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default FollowDevelopment;
