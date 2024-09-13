import styles from './countryList.module.css';
import CountryItem from './CountryItem';
import Spinner from './Spinner';
import Message from './Message';
import { useCities } from '../context/CitiesContext';

function CountryList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add on first city by clicking on the city on the map" />;

  // const countries = cities.reduce((cur, city) => {
  //   if(!cur.map(el => el.city).includes(city => city.country))
  // });

  // const countries = cities.reduce((arr, city) => {
  //   // Kiểm tra xem country của city đã có trong arr hay chưa
  //   if (!arr.some((el) => el.country === city.country)) {
  //     return [...arr, { country: city.country, emoji: city.emoji }];
  //   } else {
  //     return arr;
  //   }
  // }, []);

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el, key) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
