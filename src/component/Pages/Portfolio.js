import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';

const Portfolio = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='bg-accent pt-24 pb-24'>
            <div className='text-center relative mb-16'>
                <h2 className='text-white absolute font-extrabold z-10 top-1/3 lg:left-1/3 right-1/3  text-2xl lg:text-4xl'>PRACTICE <span className='text-primary'>PROJECTS</span></h2>
                <span className=' lg:text-8xl text-6xl opacity-40'>PORTFOLIO</span>
            </div>
            <div className='container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>
                    )
                }
                
            </div>
        </div>
    );
};

export default Portfolio;