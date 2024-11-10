import { useParams } from "react-router-dom";
import { useSubscribeToPackage } from "../queries/useSubscribeToPackage";
import { useGlobal } from "../queries/useGlobal";
import { FaCheck } from "react-icons/fa6";
import Button from "../ui/Button";
import Spinner from "../ui/spinner/Spinner";

function SingleSubscription() {
  const { id } = useParams();
  const { isLoading, subscribeToPackage } = useSubscribeToPackage();
  const { isLoading: isPackagesLoading, packages } = useGlobal();
  if (isLoading) return <Spinner />;

  const packageToDisplay = packages?.find((pck) => pck?.id === parseInt(id));

  function handleSubmit() {
    subscribeToPackage({ packageId: id, paymentMethod: "cash" });
  }

  return (
    <div className="flex h-[calc(100vh-64px)] items-center justify-center text-[#fff]">
      <div className="flex w-[90%] flex-col gap-[10px] rounded-md bg-[#323232d6] p-[10px] md:w-[450px]">
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

        <p className="text-lg">
          وسيله الدفع: <span className="text-primary">كاش</span>
        </p>
        <Button
          onClick={handleSubmit}
          disabled={isLoading || isPackagesLoading}
        >
          تأكيد
        </Button>
      </div>
    </div>
  );
}

export default SingleSubscription;
