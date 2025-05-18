import { useNavigate } from 'react-router-dom';

function BookList({ books, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="mt-6">
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul className="space-y-4">
          {books.map((book) => (
            <li
              key={book.id}
              className="border p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => navigate(`/book/${book.id}`, { state: book })}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(book.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;