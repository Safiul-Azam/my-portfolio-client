import React from 'react';
import { FaAddressBook } from 'react-icons/fa'
import { FaEnvelopeOpen } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'

const Contact = () => { 
    return (
        <div className='bg-accent pt-24 pb-16'>
            <div className='text-center relative mb-16'>
                <h2 className='text-white absolute font-extrabold z-10 top-1/3 lg:left-1/3 right-1/3  text-2xl lg:text-5xl'>GET ME <span className='text-primary'>TOUCH</span></h2>
                <span className=' lg:text-9xl text-6xl opacity-40'>CONTACT</span>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-16 items-center container mx-auto'>
                <div className='px-10'>
                    <h3 className='text-3xl text-white mb-4'>I Want To Hear From You</h3>
                    <p className='text-white text-lg mb-8'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div>
                        <div className='flex items-center mb-10'>
                            <FaAddressBook className='text-primary text-5xl' />
                            <div className='ml-4 '>
                                <h2 className='text-xl text-gray-400'>Address</h2>
                                <span className='text-white text-base tracking-wider'>Gazipur city, Dhaka, Bangladesh</span>
                            </div>
                        </div>
                        <div className='flex items-center mb-10'>
                            <FaEnvelopeOpen className='text-primary text-5xl' />
                            <div className='ml-4 '>
                                <h2 className='text-xl text-gray-400'>Email</h2>
                                <span className='text-white text-base tracking-wider'>safiulazamriad@gmail.com</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <FaPhone className='text-primary text-5xl' />
                            <div className='ml-4 '>
                                <h2 className='text-xl text-gray-400'>Phone Number</h2>
                                <span className='text-white text-base tracking-wider'>(+880) 1866775563</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-10'>
                    <div className='grid grid-cols-2 gap-2 w-full mb-8 '>
                        <input type="text" placeholder="Your Name" class="input input-bordered bg-accent rounded-none input-primary text-lg w-full max-w-xs" />
                        <input type="email" placeholder="Your Email" class="input input-bordered bg-accent rounded-none input-primary text-lg w-full max-w-xs" />
                    </div>
                    <input type="text" placeholder="Your Subject" class="input input-bordered input-primary text-lg bg-accent rounded-none w-full mb-8 " />
                    <textarea class="textarea bg-accent rounded-none textarea-primary text-lg w-full mb-8" placeholder="Your Message"></textarea>
                    <input type="submit" value='submit' class="btn rounded-none text-base btn-primary w-full mb-8 " />
                </div>
            </div>
        </div>
    );
};

export default Contact;