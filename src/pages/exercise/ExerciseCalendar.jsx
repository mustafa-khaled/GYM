import Container from "../../ui/Container";

const getWeekDates = (startDate) => {
  const weekDates = [];
  const date = new Date(startDate);

  const today = new Date(date);

  for (let i = 0; i < 14; i++) {
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + i);

    const dayNames = [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ];
    weekDates.push({
      day: dayNames[newDate.getDay()],
      date: newDate.getDate(),
      isToday: newDate.toDateString() === today.toDateString(),
    });
  }

  return weekDates;
};

function ExerciseCalendar() {
  const today = new Date();
  const weekDates = getWeekDates(today);

  return (
    <Container>
      <div className="relative z-30 flex flex-wrap items-center gap-[20px]">
        {weekDates.map((dayObj, index) => (
          <div
            key={index}
            className={`mt-[20px] rounded-md bg-[#000] p-[10px] text-center text-sm font-[600] text-[#fff] ${
              dayObj.isToday ? "border border-primary text-primary" : ""
            }`}
          >
            <p
              className={`${dayObj.isToday ? "text-primary" : "text-[#ccc]"} mb-[3px]`}
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
