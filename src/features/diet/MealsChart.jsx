import ProgressCircle from "../../ui/ProgressCircle";

function MealsChart() {
  return (
    <div className="w-full rounded-md bg-bg_color p-[20px] md:w-[50%]">
      <div className="mb-[10px] flex h-[60vh] flex-col items-center justify-center gap-[20px]">
        <h2 className="text-[20px] font-[700] leading-[24px] md:text-[24px]">
          السعرات اليوميه
        </h2>

        <div className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full p-[15px]">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(#85FFC5 0 25%, transparent 30% 35%, #FFE8C6 35% 50%, transparent 60% 70%, #FFB445 80% 95%, transparent 95% 100%)",
            }}
          />
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-bg_color">
            1500
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around gap-[20px]">
        <ProgressCircle title="البروتين" count={11} color={"#85FFC5"} />
        <ProgressCircle title="الكارب" count={11} color={"#FFE8C6"} />
        <ProgressCircle title="الجهوت" count={11} color={"#FFB445"} />
      </div>
    </div>
  );
}

export default MealsChart;
