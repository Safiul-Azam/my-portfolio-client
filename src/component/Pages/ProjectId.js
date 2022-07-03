import React, { useEffect, useState } from 'react';
import { FaCode, FaDatabase, FaGlobe } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ProjectId = () => {
    const { id } = useParams()
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    const projectData = projects.filter(project => project.id === parseInt(id))
    console.log(projectData)


    return (
        <div className='bg-accent h-auto pt-24 pb-24'>
            <div class="card w-full container mx-auto ">
                <div className='lg:grid-cols-2 grid mb-20'>
                    <figure>
                        <img src={projectData[0]?.img} alt="img" />
                    </figure>
                    <div className=''>
                        <h2 className="text-2xl text-white">Technology used</h2>
                        <div className='grid grid-cols-4 mt-4 gap-3 text-center'>
                            {
                                projectData[0]?.technology.split(',').map(i => <p className='bg-success text-black'>{i}</p>)
                            }
                        </div>
                        <div className='mt-4'>
                            <a className='btn btn-circle btn-primary btn-outline mr-2' target='_blank' rel="noopener noreferrer" href={projectData[0]?.liveLink}><FaGlobe className='text-2xl'></FaGlobe></a>
                            <a className='btn btn-circle btn-primary btn-outline mr-2' target='_blank' rel="noopener noreferrer" href={projectData[0]?.gitHubClient}><FaCode className='text-2xl'></FaCode></a>
                            {projectData[0]?.gitHubServer && <a className='btn btn-circle btn-primary btn-outline' target='_blank' rel="noopener noreferrer" href={projectData[0]?.gitHubServer} ><FaDatabase className='text-2xl'></FaDatabase></a>}
                        </div>
                    </div>
                </div>
                <div className='px-8 mt-8 text-white'>
                    <h2 className='text-2xl mb-4 text-primary'>{projectData[0]?.titleName} -- {projectData[0]?.aboutSite}</h2>
                    <p>1- {projectData[0]?.description1}</p>
                    <p>2- {projectData[0]?.description2}</p>
                    <p className='mb-4'>3- {projectData[0]?.description3}</p>
                </div>
                <div className='grid grid-cols-2 text-white px-8 mt-16 mb-20'>
                    <div>
                        <h2 className='text-2xl text-primary mb-2'>Features for normal user</h2>
                        <ul>
                            <li>User can to purchase any product</li>
                            <li>User can to pay with card</li>
                            <li>User can update your profile</li>
                            <li>User can delete your added product if you not paid yet. etc</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-2xl text-primary mb-2'>Features for admin user</h2>
                        <ul>
                            <li>Admin can make admin else</li>
                            <li>Admin can add, delete any product</li>
                            <li>Admin can shipping that product user paid</li>
                            <li>Admin can update his profile. etc</li>
                        </ul>
                    </div>
                </div>
                <h2 className='text-4xl text-primary font-bold mb-6 text-center'>Some Screen short from this project</h2>
                <div className='grid grid-cols-4 gap-4'>
                <img src={projectData[0]?.img} alt="img" />
                <img src={projectData[0]?.img2} alt="img" />
                <img src={projectData[0]?.img3} alt="img" />
                <img src={projectData[0]?.img4} alt="img" />
                <img src={projectData[0]?.img5} alt="img" />
                <img src={projectData[0]?.img6} alt="img" />
                <img src={projectData[0]?.img7} alt="img" />
                <img src={projectData[0]?.img8} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default ProjectId;