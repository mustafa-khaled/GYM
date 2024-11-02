import { useEffect, useState } from "react";
import Container from "../../ui/Container";

function ExerciseCalendar() {
  const [weekDays, setWeekDays] = useState([]);

  const currentDayIndex = new Date().getDay();

  useEffect(() => {
    const getWeekDays = () => {
      const days = [];
      const currentDate = new Date();
      const firstDayOfWeek = currentDate.getDate() - currentDate.getDay();

      for (let i = 0; i < 7; i++) {
        const day = new Date(currentDate.setDate(firstDayOfWeek + i));
        days.push({
          day: day.toLocaleDateString("ar", { weekday: "long" }),
          date: day.toLocaleDateString("ar", { day: "numeric" }),
        });
      }

      return days;
    };

    setWeekDays(getWeekDays());
  }, []);

  return (
    <Container>
      <div className="relative z-30 flex flex-wrap items-center gap-[20px]">
        {weekDays.map((dayObj, index) => (
          <div
            key={index}
            className={`mt-[20px] rounded-md bg-[#000] p-[10px] text-center text-sm font-[600] text-[#fff] ${
              index === currentDayIndex
                ? "border border-primary text-primary"
                : ""
            }`}
          >
            <p
              className={`${index === currentDayIndex ? "text-primary" : "text-[#ccc]"} mb-[3px]`}
            >
              {dayObj.day}
            </p>
            <p>{dayObj.date}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ExerciseCalendar;
