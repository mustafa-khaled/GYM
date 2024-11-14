import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../../ui/Container";

function ExerciseCalendar() {
  const [weekDays, setWeekDays] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!searchParams.get("date")) {
      setSearchParams({ date: currentDate });
    }

    // Generate the weekdays array with Arabic names and numeric dates
    const getWeekDays = () => {
      const days = [];
      const today = new Date();
      const firstDayOfWeek = today.getDate() - today.getDay();

      for (let i = 0; i < 7; i++) {
        const day = new Date(today.setDate(firstDayOfWeek + i));
        days.push({
          day: day.toLocaleDateString("ar", { weekday: "long" }),
          date: day.toISOString().split("T")[0],
        });
      }
      return days;
    };

    setWeekDays(getWeekDays());
  }, [currentDate, searchParams, setSearchParams]);

  // Handler to set the selected date in searchParams
  const handleDateSelect = (date) => {
    setSearchParams({ date }, { replace: true });
  };

  return (
    <Container>
      <div className="relative z-30 flex flex-wrap items-center gap-[20px]">
        {weekDays.map((dayObj, index) => {
          const isActive = searchParams.get("date") === dayObj.date;
          return (
            <div
              key={index}
              className={`mt-[20px] rounded-md bg-[#000] p-[10px] text-center text-sm font-[600] text-[#fff] ${
                isActive
                  ? "border border-primary text-primary"
                  : "cursor-pointer"
              }`}
              onClick={() => handleDateSelect(dayObj.date)}
            >
              <p
                className={`${isActive ? "text-primary" : "text-[#ccc]"} mb-[3px]`}
              >
                {dayObj.day}
              </p>
              <p>{dayObj.date}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default ExerciseCalendar;
