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
                <button onClick={scrollUp}><FaAngleDoubleUp  className='fixed flex items-center justify-center bottom-4 right-4 lg:bottom-10 lg:right-10 text-primary rounded-full w-10 h-10 lg:w-10 lg:h-10  shadow-2xl bg-slate-600'></FaAngleDoubleUp></button>
            )}
        </div>
    );
};

export default ScrollTop;