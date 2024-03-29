import React from 'react';
import myPhoto from '../../images/myPhoto/portfolio-2.jpeg'
import file from '../../images/Resume-of-Safiul-Azam-Riad.pdf'
import { FaDownload } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

// import shape from '../../images/myPhoto/shape-3-svg.svg'

const Banner = () => {

    return (
        <div className='bg-accent pt-24 pb-10' id='home'>
            <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center w-3/4 mx-auto">
                    <img className='rounded border-b-8  border-l-8 border-primary bg-black shadow-2xl w-full md:w-1/2 lg:w-1/2' src={myPhoto} alt='MyPhoto' />
                <div className='lg:w-full w-full lg:px-8'>
                    <h4 className='lg:text-xl text-lg text-white mb-4'>Hello!</h4>
                    <h2 class="lg:text-5xl text-3xl text-primary font-bold mb-4">This is Safiul Azam</h2>
                    <h3 class="lg:text-3xl text-xl font-bold text-white mb-6 tracking-widest">
                        <Typewriter
                            options={{
                                strings: [
                                 'Front-End  Developer',
                                 'Full-stack Developer',
                                 'MERN-Stack Developer.',
                                 'React Developer.',
                                 'Web Instructor'
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <a class="btn btn-primary font-sans btn-outline rounded-none px-8 tracking-widest text-white mb-10" href={file} download>Get Resume<FaDownload className='ml-4' /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;