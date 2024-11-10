import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { useGlobal } from "../../queries/useGlobal";
import Container from "../../ui/Container";
import Spinner from "../../ui/spinner/Spinner";
import Button from "../../ui/Button";
import icon from "../../assets/subscriptios_icon.png";
import Empty from "../../ui/Empty";

function SubscriptionsSection() {
  const { isLoading, packages } = useGlobal();

  if (isLoading) return <Spinner />;
  if (!packages?.length) return <Empty message={"فشل في عرض البيانات."} />;

  return (
    <section className="bg-black py-[60px]">
      <Container>
        <div className="text-center">
          <h2 className="text-[32px] font-[700] leading-[40px] text-primary sm:text-[24px] sm:leading-[32px] lg:text-[48px] lg:leading-[24px]">
            اختار اشتراكك
          </h2>
          <p className="mb-[40px] mt-[32px] text-[20px] font-[600] leading-[30px] text-white sm:text-[16px] sm:leading-[24px] lg:text-[24px] lg:leading-[34px]">
            اختار الباقه المناسبه ليك
          </p>
        </div>

        <div className="grid gap-[10px] px-[10px] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:px-[20px]">
          {packages.map((sub) => {
            return (
              <div
                key={sub.id}
                className={`flex flex-col gap-[20px] rounded-[16px] bg-gradient-to-br ${sub.isSpecial ? "from-[#FFFFFF] to-primary" : "bg-[#FFFFFF]"} px-[20px] py-[30px]`}
              >
                <img src={icon} alt="icon" className="h-[64px] w-[64px]" />

                <h2 className="text-[32px] font-[700] leading-[60px]">
                  {sub.desc}
                </h2>
                <p className="flex items-center gap-[20px]">
                  <span className="text-[28px] font-[600] leading-[52px]">
                    {sub.price_after_discount}
                  </span>

                  {sub?.discount > 0 && (
                    <span className="text-[20px] font-[600] leading-[38px] line-through opacity-[0.5]">
                      {sub.discount}
                      جنيه
                    </span>
                  )}
                </p>
                <p
                  className={`${sub?.isSpecial ? "bg-gradient-to-br from-[#fff] to-[#fec0ab]" : "bg-transparent"} flex h-[66px] items-center rounded-[8px] border border-slate-300 p-[10px] text-[18px] font-[600] leading-[34px]`}
                >
                  {sub.duration}
                </p>
                <ul className="flex flex-col gap-[10px]">
                  {sub?.package_features?.map((feature) => {
                    return (
                      <li
                        key={feature?.id}
                        className="flex items-center gap-[10px] text-[18px] font-[600] leading-[34px]"
                      >
                        <span
                          className={`rounded-full p-[5px] text-sm ${sub?.isSpecial ? "bg-black text-primary" : "bg-primary text-white"}`}
                        >
                          <FaCheck />
                        </span>
                        {feature?.name}
                      </li>
                    );
                  })}
                </ul>

                <Link to={`/subscriptions/${sub.id}`} className="mt-auto">
                  <Button variant="tertiary" styles={"!bg-black text-white"}>
                    المزيد
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default SubscriptionsSection;
