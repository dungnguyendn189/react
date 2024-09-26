import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { CitiesProvider } from './context/CitiesContext';
import { AuthProvider } from './context/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';

// import Product from './pages/Product';
// import HomePage from './pages/HomePage';
// import Pricing from './pages/Pricing';
// import PageNotFound from './pages/PageNotFound';
// import AppLayout from './pages/AppLayout';
// import Login from './pages/Login';

const HomePage = lazy(() => import('./pages/HomePage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const PageNotFound = lazy(() => import('./Pages/PageNotFound'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const Login = lazy(() => import('./pages/Login'));

// dist/assets/index-h-1p7l_2.css   30.07 kB │ gzip:   5.09 kB
// dist/assets/index-C_k21bjM.js   509.33 kB │ gzip: 148.93 kB

import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import SpinnerFullPage from './components/SpinnerFullPage';

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />

              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App; //-
