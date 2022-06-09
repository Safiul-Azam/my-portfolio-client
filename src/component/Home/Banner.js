import React from 'react';
import myPhoto from '../../images/myPhoto/portfolio-2.jpeg'
import file from '../../images/Resume-of-Safiul-Azam-Riad.pdf'
import { FaDownload } from 'react-icons/fa';
// import shape from '../../images/myPhoto/shape-3-svg.svg'

const Banner = () => {
    return (
        <div className='bg-accent pt-16'>
                <div class="container mx-auto flex items-center flex-row">
                    <div className='lg:w-1/2 w-full px-8 lg:pt-10 lg:pb-10 mx-auto rounded-2xl'>
                        <img className='rounded-2xl w-full lg:w-3/4' src={myPhoto} alt='MyPhoto' />
                    </div>
                    <div className='lg:w-3/4 px-8'>
                        <h4 className='lg:text-xl text-lg text-white mb-4'>Hello!</h4>
                        <h2 class="lg:text-5xl text-3xl text-primary font-bold mb-4">This is Safi</h2>
                        <h3 class="lg:text-3xl text-2xl font-bold text-white mb-6 tracking-widest">I'm a Full-Stack Web Developer</h3>
                        
                        <a class="btn btn-primary font-sans btn-outline rounded-none px-8 tracking-widest text-white" href={file} download>Download resume<FaDownload className='ml-4'/></a>
                    </div>
                </div>
            </div>
    );
};

export default Banner;