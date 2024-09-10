import styles from './countryList.module.css';
import CountryItem from './CountryItem';

import Spinner from './Spinner';
import Message from './Message';

function CountryList({ cities, isLoading }) {
  console.log(cities);
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add on first city by clicking on the city on the map" />;

  // const countries = cities.reduce((cur, city) => {
  //   if(!cur.map(el => el.city).includes(city => city.country))
  // });

  const countries = {};

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem city={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
