import { useSearchParams, useNavigate } from "react-router-dom";
import Container from "../../ui/Container";

const generateWeekDays = () => {
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

function ExerciseCalendar() {
  const weekDays = generateWeekDays();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentDate = new Date().toISOString().split("T")[0];
  const selectedDate = searchParams.get("date") || currentDate;

  const handleDateSelect = (date) => {
    setSearchParams({ date }, { replace: true });
    // Reset the URL to /exercise/today with the new date (without exerciseId)
    navigate(`/exercise/today?date=${date}`, { replace: true });
  };

  return (
    <Container>
      <div className="relative z-30 flex flex-wrap items-center gap-[20px]">
        {weekDays?.map((dayObj, index) => {
          const isActive = selectedDate === dayObj.date;
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
                className={`${
                  isActive ? "text-primary" : "text-[#ccc]"
                } mb-[3px]`}
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
