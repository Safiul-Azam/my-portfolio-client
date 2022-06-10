import React from 'react';
import myPhoto from '../../images/myPhoto/portfolio-1.png'
import file from '../../images/Resume-of-Safiul-Azam-Riad.pdf'
import { FaDownload } from 'react-icons/fa';
// import shape from '../../images/myPhoto/shape-3-svg.svg'

const Banner = () => {
    return (
        <div className='bg-accent h-auto pt-16'>
                <div class="container mx-auto lg:flex items-center flex-row">
                    <div className='lg:w-1/2 md:w-1/2 w-full px-8 lg:pt-10 pb-10 mx-auto rounded-xl'>
                        <img className='rounded-2xl border-t-8  border-b-8 border-primary bg-black shadow-2xl w-full md:w-3/4 lg:w-3/4' src={myPhoto} alt='MyPhoto' />
                    </div>
                    <div className='lg:w-3/4 w-full px-8'>
                        <h4 className='lg:text-xl text-lg text-white mb-4'>Hello!</h4>
                        <h2 class="lg:text-5xl text-3xl text-primary font-bold mb-4">This is Safi</h2>
                        <h3 class="lg:text-3xl text-2xl font-bold text-white mb-6 tracking-widest">I'm a Full-Stack Web Developer</h3>
                        <a class="btn btn-primary font-sans btn-outline rounded-none px-8 tracking-widest text-white mb-10" href={file} download>Download resume<FaDownload className='ml-4'/></a>
                    </div>
                </div>
            </div>
    );
};

export default Banner;