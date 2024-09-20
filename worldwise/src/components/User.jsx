import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/FakeAuthContext';
import styles from './User.module.css';
import Button from './Button';
import { useEffect } from 'react';

function User() {
  const { logout, user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  function handleClick() {
    // e.preventDefault();
    logout();
    navigate('/');
  }

  // useEffect(() => {
  //   if (isAuthenticated === false) {
  //   }
  // }, [isAuthenticated, navigate]);

  return (
    <div className={styles.user} onSubmit={handleClick}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <Button type="primary" onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
