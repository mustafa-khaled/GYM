export function generateWeekDays() {
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
}
