import { Routes, Route } from 'react-router-dom';
import ListPage from './Pages/ListPage';
import DetailPage from './Pages/DetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/book/:id" element={<DetailPage />} />
      <Route path="/create" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
