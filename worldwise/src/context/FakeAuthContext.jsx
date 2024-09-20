import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const initalstate = {
    user: null,
    isAuthenticated: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'login':
        return { ...state, user: action.payload, isAuthenticated: true };
      case 'logout':
        return { ...state, user: null, isAuthenticated: false };
      default:
        throw new Error(`Unknown action ${action.type}`);
    }
  }
  const FAKE_USER = {
    name: 'Dũng',
    email: 'dung@gmail.com',
    password: '1234',
    avatar: 'https://i.pravatar.cc/100?u=zz',
  };

  const [{ user, isAuthenticated }, dispath] = useReducer(reducer, initalstate);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      return dispath({ type: 'login', payload: FAKE_USER });
  }
  function logout() {
    dispath({ type: 'logout' });
  }
  return <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  const contex = useContext(AuthContext);
  if (contex === undefined) throw new Error('Context cua ban dang o ngoai provider');
  return contex;
};

export { AuthProvider, useAuth };
