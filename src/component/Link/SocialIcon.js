import React from 'react';
import {  FaFacebookF, FaGithubAlt, FaGreaterThan, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialIcon = () => {
    return (
        <div className='z-50 fixed top-72 lg:right-4 bg-none lg:bg-accent rounded-full py-4 px-1 flex flex-col'>
            <div class="navbar bg-accent">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabIndex="0" class="md:hidden lg:hidden">
                            <FaGreaterThan className='text-sm text-white'></FaGreaterThan>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content shadow text-white">
                            <a href='https://www.facebook.com/safiul.azam.587/' class=" btn btn-circle btn-primary btn-outline mb-1">
                                <FaFacebookF className='text-white text-sm lg:text-2xl'></FaFacebookF>
                            </a>
                            <a href='https://www.linkedin.com/in/safiul-azam-b2a44a212/' class="btn btn-circle btn-primary btn-outline mb-1">
                                <FaLinkedinIn className='text-white text-sm lg:text-2xl'></FaLinkedinIn>
                            </a>
                            <a href='https://github.com/Safiul-Azam' class="btn btn-circle btn-primary btn-outline mb-1">
                                <FaGithubAlt className='text-white text-2xl'></FaGithubAlt>
                            </a>
                            <a href='https://github.com/Safiul-Azam' class="btn btn-circle btn-primary btn-outline mb-1">
                                <FaInstagram className='text-white text-2xl'></FaInstagram>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class="navbar-center hidden m lg:flex z-10">
                    <ul class="menu menu-horizontal p-0 text-white gap-5">
                        <div className='fixed top-72 right-4 bg-accent rounded-full py-4 px-1 flex flex-col'>
                            <a href='https://www.facebook.com/safiul.azam.587/' class=" btn btn-circle btn-primary btn-outline mb-1">
                                <FaFacebookF className='text-white text-sm lg:text-2xl'></FaFacebookF>
                            </a>
                            <a href='https://www.linkedin.com/in/safiul-azam-b2a44a212/' class="btn btn-circle btn-primary btn-outline mb-1">
                                <FaLinkedinIn className='text-white text-sm lg:text-2xl'></FaLinkedinIn>
                            </a>
                            <a href='https://github.com/Safiul-Azam' class="btn btn-circle btn-primary btn-outline mb-1">
                                <FaGithubAlt className='text-white text-2xl'></FaGithubAlt>
                            </a>
                            <a href='https://github.com/Safiul-Azam' class="btn btn-circle btn-primary btn-outline mb-1">
                                <FaInstagram className='text-white text-2xl'></FaInstagram>
                            </a>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SocialIcon;