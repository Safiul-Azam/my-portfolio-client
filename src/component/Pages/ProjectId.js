import React, { useEffect, useState } from 'react';
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
            <div class="card w-full rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl border  container mx-auto ">
                <figure class="grid grid-cols-3 gap-4">
                    <img src={projectData[0]?.img} alt="img" class="w-1/3 h-screen" />
                    <img src={projectData[0]?.img2} alt="img" class="w-1/3 h-screen" />
                    <img src={projectData[0]?.img3} alt="img" class=" w-1/3 h-screen" />
                </figure>
                <div className='px-8 mt-8 text-white'>
                    <h2 className='text-2xl mb-4'>{projectData[0]?.titleName} -- {projectData[0]?.aboutSite}</h2>
                    <p>1- {projectData[0]?.description1}</p>
                    <p>2- {projectData[0]?.description2}</p>
                    <p className='mb-4'>3- {projectData[0]?.description3}</p>
                    <h2 className="text-2xl text-white">Technology used</h2>
                    <div className='grid grid-flow-col-dense gap-4 mt-4 px-10'>
                        {
                            projectData[0]?.technology.split(',').map(i => <button className='btn glass disabled:'>{i}</button>)
                        }
                    </div>
                    <div className=' mt-10 px-2 pb-4 grid grid-cols-3 gap-4'>

                        <a target='_blank' rel="noopener noreferrer" href={projectData[0]?.liveLink} class="btn btn-outline btn-primary btn-xs  rounded-tl-none rounded-tr-md rounded-br-none">Live</a>
                        <a target='_blank' rel="noopener noreferrer" href={projectData[0]?.gitHubClient} class="btn btn-outline btn-primary btn-xs  rounded-tl-none rounded-tr-md rounded-br-none">GitHub Client</a>
                        {projectData[0]?.gitHubServer && <a target='_blank' rel="noopener noreferrer" href={projectData[0]?.gitHubServer} class="btn btn-outline btn-primary btn-xs rounded-tl-none rounded-tr-md rounded-br-none">GitHub Server</a>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectId;