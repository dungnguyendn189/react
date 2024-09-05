import { NavLink } from 'react-router-dom';
import styles from './pageNav.module.css';

function PageNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">HomePage</NavLink>
        </li>

        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
