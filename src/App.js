import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <div className="App">
    <Header />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </Provider>
  </div>
);

export default App;
