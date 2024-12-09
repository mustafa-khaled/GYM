import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useSubscribeDuration } from "../../queries/useSubscribeDuration";

export default function SubscriptionDetails() {
  const { data } = useSubscribeDuration();

  return (
    <div className="leading-[24px]">
      <p className="md:text-[20px]">{`مدة الاتشراك: ${data?.package_duration_days} ايام`}</p>
      <div className="mt-[10px] flex items-center gap-[10px] font-[600]">
        <p className="w-[200px]">{`متبقي ${data?.remain_days} ايام`}</p>
        <Link to="/subscriptions" className="w-[130px]">
          <Button AriaLabel="renewNow">تجديد الان</Button>
        </Link>
      </div>
      <p>{data?.goals.join(" ")}</p>
    </div>
  );
}
