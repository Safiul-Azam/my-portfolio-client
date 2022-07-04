import React from 'react';
import { FaFacebookF, FaGithubAlt, FaGreaterThan, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialIcon = () => {
    return (
        <div className='z-50 fixed top-80 lg:left-4 bg-none rounded-full py-4 px-1 flex flex-col'>
            <div class="">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabIndex="0" class="md:hidden lg:hidden">
                            <FaGreaterThan className='text-lg text-primary'></FaGreaterThan>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content shadow text-white mt-4 duration-500 ease-in-out">
                            <a href='https://www.facebook.com/safiul.azam.587/' class=" mb-4">
                                <FaFacebookF className='text-white text-lg lg:text-2xl'></FaFacebookF>
                            </a>
                            <a href='https://www.linkedin.com/in/safiul-azam-b2a44a212/' class="mb-4">
                                <FaLinkedinIn className='text-white text-lg lg:text-2xl'></FaLinkedinIn>
                            </a>
                            <a href='https://github.com/Safiul-Azam' class="mb-4">
                                <FaGithubAlt className='text-white text-lg lg:text-2xl'></FaGithubAlt>
                            </a>
                            <a href='https://github.com/Safiul-Azam' class="mb-4">
                                <FaInstagram className='text-white text-lg lg:text-2xl'></FaInstagram>
                            </a>
                            <div className='divider divider-horizontal'></div>
                        </ul>
                    </div>
                </div>
                <div class="navbar-center hidden lg:flex z-10">
                    <ul class="menu menu-horizontal p-0 text-white gap-5">
                        <div className='rounded-full py-4 px-1 flex flex-col'>
                            <a href='https://www.facebook.com/safiul.azam.587/' class=" mb-4">
                                <FaFacebookF className='text-white text-sm lg:text-2xl'></FaFacebookF>
                            </a>
                            <a href='https://www.linkedin.com/in/safiul-azam-b2a44a212/' class=" mb-4">
                                <FaLinkedinIn className='text-white text-sm lg:text-2xl'></FaLinkedinIn>
                            </a>
                            <a href='https://github.com/Safiul-Azam' class="mb-4">
                                <FaGithubAlt className='text-white text-2xl'></FaGithubAlt>
                            </a>
                            <a href='https://github.com/Safiul-Azam' class="mb-4">
                                <FaInstagram className='text-white text-2xl'></FaInstagram>
                            </a>
                            <div className='bg-white h-28 w-0.5 ml-[10px]'></div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SocialIcon;