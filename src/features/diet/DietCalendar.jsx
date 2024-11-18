import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import Container from "../../ui/Container";

function DietCalendar() {
  const [weekDays, setWeekDays] = useState([]);

  const currentDayIndex = new Date().getDay();

  useEffect(() => {
    const getWeekDays = () => {
      const days = [];
      const currentDate = new Date();
      const firstDayOfWeek = currentDate.getDate() - currentDate.getDay();

      for (let i = 0; i < 7; i++) {
        const day = new Date(currentDate.setDate(firstDayOfWeek + i));
        days.push(day.toLocaleDateString("ar", { weekday: "long" }));
      }

      return days;
    };

    setWeekDays(getWeekDays());
  }, []);

  return (
    <div className="relative flex min-h-[50px] items-center bg-bg_color py-[10px] text-[#fff]">
      <Container>
        <div className="flex flex-col flex-wrap items-center justify-between gap-[10px] md:flex-nowrap lg:flex-row">
          <div className="flex flex-wrap gap-2 md:gap-[20px]">
            {weekDays.map((day, index) => (
              <div key={index} className="text-center text-xs">
                {day}
                <div
                  className={`mt-[5px] flex h-[40px] w-[40px] items-center justify-center rounded-full border-[5px] ${
                    index === currentDayIndex
                      ? "border-primary"
                      : "border-gray-300"
                  } bg-[#000]`}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full items-center justify-between gap-[10px] sm:w-[300px]">
            <p>الاسبوع 2</p>
            <div className="sm:w-[150px]">
              <Button AriaLabel="previousWeeks" styles={"!font-[700] p-[5px]"}>
                الاسابيع السابقه
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DietCalendar;
