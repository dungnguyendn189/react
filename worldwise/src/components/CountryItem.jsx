import styles from './CountryItem.module.css';
function countryCodeToFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{countryCodeToFlagEmoji(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
