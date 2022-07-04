import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Home/Header';
import Home from './component/Home/Home';
import About from './component/Pages/About';
import Blogs from './component/Pages/Blogs';
import Contact from './component/Pages/Contact';
import Portfolio from './component/Pages/Portfolio';
import ProjectId from './component/Pages/ProjectId';
import ParticleBackground from './component/Link/ParticleBackground';
import AnimationCursor from './component/Link/AnimationCursor';
import ScrollTop from './component/Link/ScrollTop';
import SocialIcon from './component/Link/SocialIcon';
import Footer from './component/Home/Footer';
import AllPortfolio from './component/Pages/AllPortfolio';

function App() {
  return (
    <div>
    <AnimationCursor/>
    <SocialIcon></SocialIcon>
    <ParticleBackground />
    <Header></Header>
    <ScrollTop></ScrollTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="allPortfolio" element={<AllPortfolio />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projectId/:id"element={<ProjectId/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
