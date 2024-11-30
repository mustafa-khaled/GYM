function SingleMealDetails({ progress = 50 }) {
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
            <span className="relative z-10 mb-1.5 block">البرةتين</span>
            <div className="absolute inset-0 border-b-2 border-slate-500"></div>
            <div
              className="border-chart_color1 absolute inset-0 border-b-2"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="relative">
            <span className="relative z-10 mb-1.5 block">الكارب</span>
            <div className="absolute inset-0 border-b-2 border-slate-500"></div>
            <div
              className="border-chart_color2 absolute inset-0 border-b-2"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="relative">
            <span className="relative z-10 mb-1.5 block">الدهون</span>
            <div className="absolute inset-0 border-b-2 border-slate-500"></div>
            <div
              className="border-chart_color3 absolute inset-0 border-b-2"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-around gap-5 md:flex-nowrap md:justify-between md:gap-0 md:px-[20px]">
        <div className="flex flex-col items-center text-2xl">
          <span className="font-semibold">76</span>
          <span>السعرات</span>
        </div>
        <div className="flex flex-col items-center text-2xl">
          <span className="font-semibold">6.6g</span>
          <span>البروتين</span>
        </div>
        <div className="flex flex-col items-center text-2xl">
          <span className="font-semibold">4.6g</span>
          <span>الكارب</span>
        </div>
        <div className="flex flex-col items-center text-2xl">
          <span className="font-semibold">5.6g</span>
          <span>الجهون</span>
        </div>
      </div>
    </>
  );
}

export default SingleMealDetails;
