import { useState } from 'react';

function BookForm({ initialData = {}, onSubmit }) {
  const [form, setForm] = useState({
    title: initialData.title || '',
    author: initialData.author || '',
    description: initialData.description || '',
    isbn: initialData.isbn || '',
    publisher: initialData.publisher || '',
    publishedDate: initialData.publishedDate || '',
    imageUrl: initialData.imageUrl || '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <input
        name="title"
        placeholder="Enter the book's title"
        value={form.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="author"
        placeholder="Enter author's name"
        value={form.author}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Enter book description"
        value={form.description}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="isbn"
        placeholder="Enter ISBN number"
        value={form.isbn}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="publisher"
        placeholder="Enter publisher name"
        value={form.publisher}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="publishedDate"
        placeholder="Enter published year (e.g. 2022)"
        value={form.publishedDate}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="imageUrl"
        placeholder="Enter cover image URL"
        value={form.imageUrl}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
}

export default BookForm;