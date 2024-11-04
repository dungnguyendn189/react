import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <input
        className="input transition-all sm:w-64 duration-500 md:w-80"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Form>
  );
}

export default Search;
