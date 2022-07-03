import React from 'react';
import Banner from './Banner';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Portfolio></Portfolio>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;