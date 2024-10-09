import { useState } from 'react';
import {
  Form,
  useNavigate
} from 'react-router-dom';
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
      />
    </Form>
  );
}

export default SearchOrder;
