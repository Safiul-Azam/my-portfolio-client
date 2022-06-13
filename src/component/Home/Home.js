import React from 'react';
import Banner from './Banner';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;