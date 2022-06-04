import React from 'react';
import Header from './Header';
import myPhoto from '../../images/myPhoto/portfolio-2.jpeg'
import shape from '../../images/myPhoto/shape-1.png'

const Banner = () => {
    return (
        <div className='bg-accent h-screen'>
            <Header></Header>
            <div class="container mx-auto">
                <div class="flex justify-around items-center mt-8 ">
                    <div className='1/2 bg-primary bg-opacity-10 px-10 py-10 rounded-2xl'>
                        <img width={300} className='rounded-2xl' src={myPhoto} alt='MyPhoto' />
                    </div>
                    <div className='w-3/5'>
                        <h4 className='text-xl text-white mb-4'>Hello!</h4>
                        <h2 class="text-5xl text-primary font-bold mb-4">This is Safi</h2>
                        <h3 class="text-3xl font-bold text-white mb-6 tracking-wider">I'M A FULL-STACK WEB DEVELOPER</h3>
                        <button class="btn font-sans btn-outline rounded-none px-8 tracking-widest btn-primary">hire me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;