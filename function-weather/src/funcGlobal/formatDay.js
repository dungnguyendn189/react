export function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
  }).format(new Date(dateStr));
}
