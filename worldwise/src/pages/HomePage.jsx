import { Link } from 'react-router-dom';
import PageNav from '../components/pageNav';

function HomePage() {
  return (
    <>
      <PageNav />
      <h1>HomePage</h1>
      <Link to="/app">Go to the App</Link>
    </>
  );
}

export default HomePage;
