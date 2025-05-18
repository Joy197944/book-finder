import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchBooks } from '../api/api';

function ListPage() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query) return;
    const results = await searchBooks(query);
    setBooks(results);
  };

  const handleDelete = (key) => {
    setBooks((prev) => prev.filter((book) => book.key !== key));
  };

  return (
    <div>
      <h1>Book Finder</h1>
      <input
        type="text"
        placeholder="Search by title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => navigate('/create')}>Create New Book</button>

      <ul>
        {books.map((book) => (
          <li key={book.key}>
            {book.title}
            <button onClick={() => navigate(`/book/${book.key}`)}>Edit</button>
            <button onClick={() => handleDelete(book.key)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;