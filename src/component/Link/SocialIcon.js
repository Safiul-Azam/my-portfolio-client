import React from 'react';
import { FaFacebookF, FaGithubAlt, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialIcon = () => {
    return (
        <div className='z-50 fixed top-72 right-4 bg-accent rounded-full py-4 px-1 flex flex-col'>
            <a href='https://www.facebook.com/safiul.azam.587/' class=" z-50 btn btn-circle btn-primary btn-outline mb-1">
            <FaFacebookF className='text-white text-2xl'></FaFacebookF>
            </a>
            <a href='https://www.linkedin.com/in/safiul-azam-b2a44a212/' class="btn btn-circle btn-primary btn-outline mb-1">
            <FaLinkedinIn className='text-white text-2xl'></FaLinkedinIn>
            </a>
            <a href='https://github.com/Safiul-Azam' class="btn btn-circle btn-primary btn-outline mb-1">
            <FaGithubAlt className='text-white text-2xl'></FaGithubAlt>
            </a>
            <a href='' class="btn btn-circle btn-primary btn-outline mb-1">
            <FaInstagram className='text-white text-2xl'></FaInstagram>
            </a>
        </div>
    );
};

export default SocialIcon;