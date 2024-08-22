import { formatDay } from "../funcGlobal/formatDay";
import { getWeatherIcon } from "../funcGlobal/getWeatherIcon";

function Day({ date, min, max, code, isToday }) {
  console.log(code);
  return (
    <li className="day">
      <span>{getWeatherIcon(code)}</span>
      <p>{isToday ? "To day" : formatDay(date)} </p>
      <p>
        {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
      </p>
    </li>
  );
}
export default Day;
