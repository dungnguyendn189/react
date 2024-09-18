import { createContext, useContext, useState, useEffect } from 'react';

const CitesContext = createContext();
const BASE_URL = 'http://localhost:9000';

functuo;

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

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

  function getCity(id) {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
      } catch {
        alert('There was an error loading data ...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch {
      alert('There was an error loading data ...');
    } finally {
      setIsLoading(false);
    }
  }

  async function deletedCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      alert('There was an error Deleting city data ...');
    } finally {
      setIsLoading(false);
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
