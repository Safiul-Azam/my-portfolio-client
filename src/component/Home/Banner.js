import React from 'react';
import Header from './Header';
import myPhoto from '../../images/myPhoto/portfolio-2.jpeg'
import shape from '../../images/myPhoto/shape-4.svg'

const Banner = () => {
    return (
        <div className='bg-accent h-screen'>
            <Header></Header>
            <div style={{
                    background:`url(${shape})`,
                    backgroundPosition:'bottom',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                    }} class="">
                <div class="container mx-auto flex justify-around items-center mt-8 ">
                    <div className='1/2 pt-10 pb-10 rounded-2xl'>
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