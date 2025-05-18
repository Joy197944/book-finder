import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isCreating = location.pathname === '/create';

  const [book, setBook] = useState({
    title: '',
    author: '',
    notes: '',
  });

  useEffect(() => {
    if (!isCreating && id) {
      // Fetch or simulate getting book details here
      setBook({ title: 'Sample Title', author: 'Author Name', notes: 'Sample note' });
    }
  }, [id, isCreating]);

  const handleSave = () => {
    console.log('Saving book:', book);
    navigate('/');
  };

  return (
    <div>
      <h2>{isCreating ? 'Create Book' : 'Edit Book'}</h2>
      <input
        type="text"
        placeholder="Book Title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />
      <textarea
        placeholder="Notes"
        value={book.notes}
        onChange={(e) => setBook({ ...book, notes: e.target.value })}
      />
      <button onClick={handleSave}>{isCreating ? 'Create' : 'Save'}</button>
    </div>
  );
}

export default DetailPage;