import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='bg-neutral py-10'>
            <div className=' w-3/4 mx-auto flex flex-col lg:flex-row justify-between items-center '>
                <div>
                    <p className=' text-white lg:text-lg text-sm text-center lg:text-left lg:mb-0 mb-3'>&copy; {year} All Rights Reserved <span className='text-primary'>Timing</span> made by <span className='text-primary'>Md Safiul Azma</span> </p>
                </div>
                <div>
                    <ul className='flex'>
                        <li className='mr-3 lg:bg-primary lg:p-1 rounded'><a href="https://www.facebook.com/safiul.azam.587/"><FaFacebook className='text-white text-xl lg:text-2xl'></FaFacebook></a></li>
                        <li className='mr-3 lg:bg-primary lg:p-1 rounded'><a href="https://www.linkedin.com/in/safiul-azam-b2a44a212"><FaLinkedin className='text-white text-xl lg:text-2xl'></FaLinkedin></a></li>
                        <li className='mr-3 lg:bg-primary lg:p-1 rounded'><a href="https://github.com/Safiul-Azam"><FaGithub className='text-white text-xl lg:text-2xl'></FaGithub></a></li>
                        <li className='mr-3 lg:bg-primary lg:p-1 rounded'><a href="https://github.com/Safiul-Azam"><FaInstagram className='text-white text-xl lg:text-2xl'></FaInstagram></a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Footer;