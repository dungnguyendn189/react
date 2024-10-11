import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        placeholder='Search order #'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='w-28 rounded-full px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 hover:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72'
      />
    </Form>
  );
}

export default SearchOrder;
