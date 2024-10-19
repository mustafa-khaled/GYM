import image from "../../assets/exerciseEx.png";
import imag2 from "../../assets/exe2.png";
import StartNow from "./StartNow";

const exercise = [
  {
    id: 1,
    title: "اسم التمرين",
    count: 20,
  },

  {
    id: 2,
    title: "اسم التمرين",
    count: 12,
  },

  {
    id: 3,
    title: "اسم التمرين",
    count: 10,
  },

  {
    id: 4,
    title: "اسم التمرين",
    count: 30,
  },
];

function TodayExerciseSection() {
  return (
    <div className="rounded-md bg-bg_color p-[20px]">
      <div className="flex items-center justify-center gap-[20px] text-[20px] font-[700] leading-[24px] md:text-[32px]">
        <h1>اسم التمرينه</h1>
        <img src={image} alt="" />
      </div>
      <div className="my-[20px] flex flex-col items-center gap-[20px] md:flex-row">
        <div className="w-full space-y-[20px]">
          {exercise?.map((ex, index) => {
            return (
              <div key={ex.id} className="flex items-center justify-between">
                <p className="flex items-center gap-[5px] md:text-[24px]">
                  <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#fff] text-sm text-[#000]">
                    {index + 1}
                  </span>
                  {ex.title}- {ex.count}
                </p>
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
        <div className="flex w-full items-center justify-center md:justify-end">
          <img src={imag2} alt="" />
        </div>
      </div>
      <StartNow />
    </div>
  );
}

export default TodayExerciseSection;
