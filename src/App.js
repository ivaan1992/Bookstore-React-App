import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
