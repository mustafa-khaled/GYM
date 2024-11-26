import { useSearchParams, useNavigate } from "react-router-dom";
import { generateWeekDays } from "../../utils/generateWeekDays";
import Container from "../../ui/Container";

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
