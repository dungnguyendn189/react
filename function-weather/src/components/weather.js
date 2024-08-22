import Day from "./Day";

function Weather({ location, weather }) {
  console.log(weather);
  const {
    time: dates,
    temperature_2m_max: max,
    temperature_2m_min: min,
    weathercode: code,
  } = weather;
  return (
    <div>
      <h2>
        Weather: {location.name} {location.codes}
      </h2>
      <ul className="weather">
        {dates.map((date, i) => (
          <Day
            date={date}
            max={max.at(i)}
            min={min.at(i)}
            code={code.at(i)}
            isToday={i === 0}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

export default Weather;
