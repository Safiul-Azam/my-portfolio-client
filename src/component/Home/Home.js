import React from 'react';
import Banner from './Banner';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Portfolio></Portfolio>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;