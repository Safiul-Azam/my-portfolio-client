import React from 'react';
import { FaDownload } from 'react-icons/fa';
import photo from '../../images/myPhoto/myPhoto.png'
import file from '../../images/Resume-of-Safiul-Azam-Riad.pdf'

const About = () => {
    return (
        <div className='bg-accent h-auto py-20'>
            <div className='text-center relative mb-16'>
                <h2 className='text-white absolute font-extrabold z-10 top-3 lg:top-4 lg:left-1/3 md:left-80 lg:right-1/3 left-20 text-3xl lg:text-4xl'>ABOUT <span className='text-primary'>ME</span></h2>
                <span className=' lg:text-7xl text-6xl text-gray-500 opacity-20'>ABOUT ME</span>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-1 items-center w-11/12 mx-auto'>
                <div
                className='w-full px-8'>
                    <h3 className='text-2xl text-primary mb-4'>Who am I?</h3>
                    <p className='text-white text-base mb-8'>This is Safiul Azam. a dedicated, enthusiastic and passionate Front end web developer. I like development even though I am a student of Islamic studies background. cause my passion works in this field. This is where I find the fun that comes from creating something different. And creating something different and knowing something new makes me happy. I know this thing is more needed here. Although I am a non-technical student still I think this field is for everyone. The first thing that is needed here is a skill. So I think if I have skills then I am also a member of here. And finally, I think that the interest in learning something new in my mind will lead me forward. </p>
                    <hr className=' opacity-40' />
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 text-white mt-8'>
                        <h2>First Name : Safiul Azam</h2>
                        <h2>Last Name : Riad</h2>
                        <h2>Age : 25</h2>
                        <h2>Religion : Islam</h2>
                        <h2>Email : safiulazamriad@gmail.com</h2>
                        <h2>Phone : (+880) 1866775563</h2>
                    </div>
                    <a class="btn btn-primary font-sans btn-outline rounded-none tracking-widest text-white my-4" href={file} download>Download resume<FaDownload className='ml-4' /></a>
                </div>
                <div className='lg:w-full md:w-full w-full px-8 pb-10 rounded-xl mx-auto'>
                    <img className='rounded border-t-8  border-r-8 border-primary bg-black shadow-2xl w-full md:w-3/4 lg:w-3/4' src={photo} alt="" />

                </div>
            </div>
        </div>
    );
};

export default About;