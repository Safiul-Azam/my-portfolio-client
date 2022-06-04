import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Home/Header';
import Home from './component/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
