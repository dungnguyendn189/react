import { createContext, useContext, useState, useEffect } from 'react';

const CitesContext = createContext();
const BASE_URL = 'http://localhost:9000';

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('There was an error loading data ...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return <CitesContext.Provider value={{ cities, isLoading }}>{children}</CitesContext.Provider>;
}

function useCities() {
  const context = useContext(CitesContext);
  if (context === undefined) throw new Error('Cities context was used outside of provider');
  return context;
}

export { CitiesProvider, useCities };
