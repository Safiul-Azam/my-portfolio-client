import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Home/Header';
import Home from './component/Home/Home';
import About from './component/Pages/About';
import Blogs from './component/Pages/Blogs';
import Contact from './component/Pages/Contact';
import Portfolio from './component/Pages/Portfolio';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
