import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import Button from "../Button";
import icon from "../../assets/subscriptios_icon.png";

const subscriptionOptions = [
  {
    id: 1,
    title: "باقه البدايه",
    price: 1000,
    discount: 500,
    description: "لكل بطل في بدايه الطريق",
    period: "شهر واحد",
    provides: ["نظام عذائي", "برنامج تمرين", "متابعه كل 48 ساعه مع فريقنا"],
    isSpecial: false,
  },

  {
    id: 2,
    title: "باقه التحدي",
    price: 1200,
    discount: 2400,
    description: "تحدي الـ 90 يوم",
    period: "3 شهور",
    provides: [
      "دخول تحدي الـ 90 يوم الجيماوي",
      "نظام عذائي",
      "برنامج تمرين",
      "متابعه كل 48 ساعه مع فريقنا",
      "مساعده في بناء عادات ايجابيه",
    ],
    isSpecial: true,
  },

  {
    id: 3,
    title: "باقه الابطال",
    price: 2000,
    discount: 4000,
    description: "لكل بطل قديم في اللعبه",
    period: "6 شهور",
    provides: ["نظام عذائي", "برنامج تمرين", "متابعه كل 48 ساعه مع فريقنا"],
    isSpecial: false,
  },

  {
    id: 4,
    title: "باقه ملوك اللعبه",
    price: 3800,
    discount: 7500,
    description: "لملوك اللعبه القدام",
    period: "12 شهور",
    provides: [
      "نظام عذائي",
      "برنامج تمرين",
      "متابعه كل 48 ساعه مع فريقنا",
      "مساعده في بناء عادات ايجابيه",
      "ترشيح للمشاركه في المحتوي",
    ],
    isSpecial: false,
  },
];

function SubscriptionsSection() {
  return (
    <section className="bg-black py-[60px]">
      <div className="text-center">
        <h2 className="text-[32px] font-[700] leading-[40px] text-primary sm:text-[24px] sm:leading-[32px] lg:text-[48px] lg:leading-[24px]">
          اختار اشتراكك
        </h2>
        <p className="mb-[40px] mt-[32px] text-[20px] font-[600] leading-[30px] text-white sm:text-[16px] sm:leading-[24px] lg:text-[24px] lg:leading-[34px]">
          اختار الباقه المناسبه ليك
        </p>
      </div>

      <div className="grid gap-[10px] px-[10px] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:px-[20px] lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
        {subscriptionOptions.map((sub) => {
          return (
            <div
              key={sub.id}
              className={`flex flex-col gap-[20px] rounded-[16px] bg-gradient-to-br ${sub.isSpecial ? "from-[#FFFFFF] to-primary" : "from-[#73737333] to-[#FFFFFF]"} px-[20px] py-[30px]`}
            >
              <img src={icon} alt="icon" className="h-[64px] w-[64px]" />

              <h2 className="text-[32px] font-[700] leading-[60px]">
                {sub.title}
              </h2>
              <p className="flex items-center gap-[20px]">
                <span className="text-[28px] font-[600] leading-[52px]">
                  {sub.discount}
                </span>
                <span className="text-[20px] font-[600] leading-[38px] line-through opacity-[0.5]">
                  {sub.price}
                  جنيه
                </span>
              </p>
              <p
                className={`${sub.isSpecial ? "bg-gradient-to-br from-[#fff] to-[#fec0ab]" : "bg-transparent"} flex h-[66px] items-center rounded-[8px] border border-slate-300 p-[10px] text-[18px] font-[600] leading-[34px]`}
              >
                {sub.period}
              </p>
              <ul className="flex flex-col gap-[10px]">
                {sub.provides?.map((feature) => {
                  return (
                    <li
                      key={feature}
                      className="flex items-center gap-[10px] text-[18px] font-[600] leading-[34px]"
                    >
                      <span
                        className={`rounded-full p-[5px] text-sm ${sub.isSpecial ? "bg-black text-primary" : "bg-primary text-white"}`}
                      >
                        <FaCheck />
                      </span>
                      {feature}
                    </li>
                  );
                })}
              </ul>

              <Link to={"/"} className="mt-auto">
                <Button variant="tertiary" styles={"!bg-black text-white"}>
                  المزيد
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SubscriptionsSection;
