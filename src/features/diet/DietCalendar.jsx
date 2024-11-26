import { useSearchParams } from "react-router-dom";
import { useSubscribeDuration } from "../../queries/useSubscribeDuration";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import { generateWeekDays } from "../../utils/generateWeekDays";

function DietCalendar() {
  const { data } = useSubscribeDuration();
  const weekDays = generateWeekDays();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentDate = new Date().toISOString().split("T")[0];
  const selectedDate = searchParams.get("date") || currentDate;

  const handleDateSelect = (date) => {
    setSearchParams({ date }, { replace: true });
  };

  return (
    <div className="relative flex min-h-[50px] items-center bg-bg_color py-[10px] text-[#fff]">
      <Container>
        <div className="flex flex-col flex-wrap items-center justify-between gap-[10px] md:flex-nowrap lg:flex-row">
          <div className="relative z-30 flex flex-wrap items-center gap-[20px]">
            {weekDays?.map((dayObj, index) => {
              const isActive = selectedDate === dayObj.date;
              return (
                <div
                  key={index}
                  className={`flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#000] text-xs font-semibold text-[#fff] ${
                    isActive
                      ? "border-2 border-primary text-primary"
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
                </div>
              );
            })}
          </div>

          <div className="flex w-full items-center justify-between gap-[10px] sm:w-[300px]">
            <p>الاسبوع {data?.current_week || 0}</p>
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
