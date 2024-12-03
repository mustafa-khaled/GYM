function SingleMealDetails({ progress = 50, meal, quantity }) {
  // Calculate calories for one serving
  const singleServingCalories =
    meal?.food?.fat_per_gram * 9 +
    meal?.food?.carbs_per_gram * 4 +
    meal?.food?.protein_per_gram * 4;

  // Calculate total calories based on the quantity
  const totalCalories = (singleServingCalories * quantity).toFixed(2);

  return (
    <>
      <div className="border-y border-slate-500 py-3">
        <h3>السعرات اليوميه</h3>
        <div className="mt-3 flex flex-wrap items-center justify-around gap-16 text-sm md:flex-nowrap md:justify-start">
          <div className="relative">
            <span className="relative z-10 mb-1.5 block">السعرات</span>
            <div className="absolute inset-0 border-b-2 border-slate-500"></div>
            <div
              className="absolute inset-0 border-b-2 border-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="relative">
            <span className="relative z-10 mb-1.5 block">البروتين</span>
            <div className="absolute inset-0 border-b-2 border-slate-500"></div>
            <div
              className="absolute inset-0 border-b-2 border-chart_color1"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="relative">
            <span className="relative z-10 mb-1.5 block">الكارب</span>
            <div className="absolute inset-0 border-b-2 border-slate-500"></div>
            <div
              className="absolute inset-0 border-b-2 border-chart_color2"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="relative">
            <span className="relative z-10 mb-1.5 block">الدهون</span>
            <div className="absolute inset-0 border-b-2 border-slate-500"></div>
            <div
              className="absolute inset-0 border-b-2 border-chart_color3"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-around gap-5 md:flex-nowrap md:justify-between md:gap-0 md:px-[20px]">
        <div className="flex flex-col items-center text-2xl">
          <span className="font-semibold">{totalCalories}</span>
          <span>السعرات</span>
        </div>
        <div className="flex flex-col items-center text-2xl">
          <span className="font-semibold">{meal?.food?.protein_per_gram}g</span>
          <span>البروتين</span>
        </div>
        <div className="flex flex-col items-center text-2xl">
          <span className="font-semibold">{meal?.food?.carbs_per_gram}g</span>
          <span>الكارب</span>
        </div>
        <div className="flex flex-col items-center text-2xl">
          <span className="font-semibold">{meal?.food?.fat_per_gram}g</span>
          <span>الدهون</span>
        </div>
      </div>
    </>
  );
}

export default SingleMealDetails;
