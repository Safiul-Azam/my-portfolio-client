import React from 'react';
import { useForm } from 'react-hook-form';
import { FaAddressBook,FaEnvelopeOpen,FaPhone  } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        emailjs.send('service_qkbhv6n', 'template_k7f3499', data, 'JxcfPjnSimcwKK-4Q')
            .then((result) => {
                if (result.status === 200) {
                    reset()
                }
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='bg-accent md:pt-8 pt-16 pb-20'>
            <div className='text-center relative mb-16'>
                <h2 className='text-white absolute font-extrabold z-10 lg:top-1/3 lg:left-1/3 left-14 top-3 lg:right-1/3 md:left-1/3 text-3xl lg:text-4xl'>GET ME <span className='text-primary'>TOUCH</span></h2>
                <span className=' lg:text-8xl text-6xl text-gray-500 opacity-20'>CONTACT</span>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-16 items-center md:w-11/12 w-full lg:w-11/12 mx-auto'>
                <div className='px-10'>
                    <h3 className='text-3xl text-primary mb-4'>I Want To Hear From You</h3>
                    <p className='text-white text-lg mb-8'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div>
                        <div className='flex items-center mb-4'>
                            <FaAddressBook className='text-primary text-2xl lg:text-5xl' />
                            <div className='ml-4 '>
                                <h2 className='text-xl text-gray-400'>Address</h2>
                                <span className='text-white text-sm lg:text-lg tracking-wider'>Gazipur city, Dhaka, Bangladesh</span>
                            </div>
                        </div>
                        <div className='flex items-center mb-4'>
                            <FaEnvelopeOpen className='text-primary text-2xl lg:text-5xl' />
                            <div className='ml-4'>
                                <h2 className='text-xl text-gray-400'>Email</h2>
                                <span className='text-white  text-sm lg:text-lg tracking-wider'>safiulazamriad@gmail.com</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <FaPhone className='text-primary text-2xl lg:text-5xl' />
                            <div className='ml-4 '>
                                <h2 className='text-xl text-gray-400'>Phone Number</h2>
                                <span className='text-white text-sm lg:text-lg tracking-wider'>(+880) 1866775563</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                className='w-full px-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-2 gap-2 w-full mb-8 '>
                            <input {...register("name")} name='name' type="text" placeholder="Your Name" class="input text-white input-bordered bg-transparent rounded-none input-primary text-lg w-full max-w-xs" required />
                            <input {...register("email")} name='email' type="email" placeholder="Your Email" class="input text-white input-bordered bg-transparent  rounded-none input-primary text-lg w-full max-w-xs" required />
                        </div>
                        <input {...register("subject")} name='subject' type="text" placeholder="Your Subject" class="input text-white input-bordered input-primary text-lg bg-transparent rounded-none w-full mb-8 " required />
                        <textarea {...register("message")} name='message' class="textarea text-white bg-transparent rounded-none textarea-primary text-lg w-full mb-8" placeholder="Your Message" required></textarea>
                        <input type="submit" value='submit' class="btn rounded-none text-base btn-primary w-full mb-8 " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;