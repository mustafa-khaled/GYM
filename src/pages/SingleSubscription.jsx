import { useParams } from "react-router-dom";
import { useSubscribeToPackage } from "../queries/useSubscribeToPackage";
import { useGlobal } from "../queries/useGlobal";
import { FaCheck } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Spinner from "../ui/spinner/Spinner";
import SelectBox from "../ui/SelectBox";

function SingleSubscription() {
  const { id } = useParams();
  const { isLoading, subscribeToPackage } = useSubscribeToPackage();
  const { isLoading: isPackagesLoading, packages } = useGlobal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (isLoading) return <Spinner />;

  const packageToDisplay = packages?.find((pck) => pck?.id === parseInt(id));

  const onSubmit = (data) => {
    const { paymentMethod } = data;

    subscribeToPackage({ packageId: id, paymentMethod });
  };

  return (
    <div className="flex h-[calc(100vh-64px)] items-center justify-center text-[#fff]">
      <div className="flex w-[90%] flex-col gap-[20px] rounded-md bg-gradient-to-br from-primary to-gray-800 p-[10px] md:w-[500px]">
        <h3 className="text-center text-2xl font-bold">
          {packageToDisplay?.desc}
        </h3>

        <ul className="flex flex-col gap-[5px]">
          {packageToDisplay?.package_features?.map((feature) => {
            return (
              <li
                key={feature?.id}
                className="flex items-center gap-[5px] font-[600] leading-[34px]"
              >
                <span
                  className={`rounded-full bg-primary p-[5px] text-xs text-white`}
                >
                  <FaCheck />
                </span>
                {feature?.name}
              </li>
            );
          })}
        </ul>

        <form onSubmit={handleSubmit(onSubmit)}>
          <SelectBox
            disabled={isLoading || isPackagesLoading}
            options={[{ value: "cash", title: "كاش" }]}
            label={"وسيله الدفع:"}
            name="paymentMethod"
            register={register}
            validationRules={{ required: "هذا الحقل مطلوب" }}
            error={errors?.paymentMethod?.message}
          />

          <Button
            // onClick={handleSubmit}
            type="submit"
            disabled={isLoading || isPackagesLoading}
            styles="mt-[20px]"
          >
            تأكيد
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SingleSubscription;
