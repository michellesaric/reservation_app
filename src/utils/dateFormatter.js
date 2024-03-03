export const dateFormatter = (date) => {
  const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayOfTheWeekIndex = date.getDay();
  const dayOfTheWeek = daysOfTheWeek[dayOfTheWeekIndex];

  const day = date.getDate();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = date.getMonth();
  const month = months[monthIndex];

  return `${dayOfTheWeek} ${day} ${month}`;
};
