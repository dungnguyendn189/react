import { createContext, useContext, useEffect, useReducer, useCallback } from 'react';

const CitesContext = createContext();
const BASE_URL = 'http://localhost:9000';

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true,
      };
    case 'cities/loaded':
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case 'city/loaded':
      return { ...state, isLoading: false, currentCity: action.payload };
    case 'cities/created':
      return { ...state, isLoading: false, cities: [...state.cities, action.payload], currentCity: action.payload };
    case 'cities/deleted':
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case 'rejected':
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error('Unknow action Type');
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispath] = useReducer(reducer, initialState);
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      dispath({ type: 'loading' });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispath({ type: 'cities/loaded', payload: data });
      } catch {
        dispath({ type: 'rejected', payload: 'There was an error loading data ...' });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    function getCity(id) {
      if (id === currentCity.id) return;
      async function fetchCities() {
        dispath({ type: 'loading' });
        try {
          const res = await fetch(`${BASE_URL}/cities/${id}`);
          const data = await res.json();
          dispath({ type: 'city/loaded', payload: data });
        } catch {
          dispath({ type: 'rejected', payload: 'There was an error the city ...' });
        }
      }
      fetchCities();
    },
    [currentCity.id],
  );
  async function createCity(newCity) {
    dispath({ type: 'loading' });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      dispath({ type: 'cities/created', payload: data });
    } catch {
      dispath({ type: 'rejected', payload: 'You cannot create Data' });
    }
  }

  async function deletedCity(id) {
    dispath({ type: 'loading' });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });
      dispath({ type: 'cities/deleted', payload: id });
    } catch {
      dispath({ type: 'rejected', payload: 'You cannot deleted data' });
    }
  }

  return (
    <CitesContext.Provider value={{ cities, isLoading, currentCity, getCity, createCity, deletedCity }}>
      {children}
    </CitesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitesContext);
  if (context === undefined) throw new Error('Cities context was used outside of provider');
  return context;
}

export { CitiesProvider, useCities };
