import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollTop = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    setScroll(true);
                } else {
                    setScroll(false);
                }
            })
    }, [])
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    return (
        <div className=''>
            {scroll && (
                <button className='btn-circle btn-primary btn-outline' onClick={scrollUp}><FaAngleDoubleUp className='fixed flex items-center justify-center bottom-4 right-4 lg:bottom-10 lg:right-4 text-primary rounded-full text-5xl shadow-2xl'></FaAngleDoubleUp></button>
            )}
        </div>
    );
};

export default ScrollTop;