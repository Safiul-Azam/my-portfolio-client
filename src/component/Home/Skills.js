import React from 'react';
import skill1 from '../../images/skills/skill-1.png'
import skill2 from '../../images/skills/skill-2.png'
import skill3 from '../../images/skills/skill-3.png'
import skill4 from '../../images/skills/skill-4.png'
import skill5 from '../../images/skills/skill-5.png'
import skill6 from '../../images/skills/skill-6.png'
import skill7 from '../../images/skills/skill-7.png'
import skill8 from '../../images/skills/skill-8.png'
import skill9 from '../../images/skills/skill-9.png'
import skill10 from '../../images/skills/skill-10.png'
import skill11 from '../../images/skills/skill-11.png'
import skill12 from '../../images/skills/skill-12.png'
import skill13 from '../../images/skills/skill-13.png'
import skill14 from '../../images/skills/skill-14.png'


const Skills = () => {
    const skills = [skill1, skill2,skill3,skill4,skill5,skill6,skill7,skill8,skill9,skill10,skill11,skill12,skill13,skill14]
    return (
        <div className='bg-accent md:pt-8 pt-16 pb-20'>
             <div className='text-center relative mb-16'>
                <h2 className='text-white absolute font-extrabold z-10 lg:top-1/3 lg:left-1/3 left-24  top-3 lg:right-1/3 md:left-80 text-3xl lg:text-4xl'>My<span className='text-primary'>Skills</span></h2>
                <span className=' lg:text-8xl text-6xl text-gray-500 opacity-20 '> Skills</span>
            </div>
            <div className='w-11/12 mx-auto grid lg:grid-cols-7 grid-cols-5 text-center gap-4'>
                {skills.map((skill,) => <div className='p-2 bg-white flex justify-center'>
                    <img className='w-20' src={skill} alt='icons' />
                </div>)}
            </div>
        </div>
    );
};

export default Skills;