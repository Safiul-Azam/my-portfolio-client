import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    
    const { liveLink, gitHubClient, gitHubServer, img,id,titleName,aboutSite } = project
    return (
        <div class="card w-full rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl border ">
            <figure class="">
                <img src={img} alt="img" class="w-full h-screen" />
            </figure>
            <div className='mt-4 px-2'>
                <h2 className='text-2xl text-white'>{titleName} - <span className='text-lg'>{aboutSite}</span></h2>
            </div>
            <div className=' mt-10 px-2 pb-4 grid grid-cols-3 gap-4'>
                <a target='_blank' rel="noopener noreferrer" href={liveLink} class="btn btn-outline btn-primary btn-xs  rounded-tl-none rounded-tr-md rounded-br-none">Live</a>
                <a target='_blank' rel="noopener noreferrer" href={gitHubClient} class="btn btn-outline btn-primary btn-xs  rounded-tl-none rounded-tr-md rounded-br-none">GitHub Client</a>
                {gitHubServer && <a target='_blank' rel="noopener noreferrer" href={gitHubServer} class="btn btn-outline btn-primary btn-xs rounded-tl-none rounded-tr-md rounded-br-none">GitHub Server</a>}
                <Link to={`/projectId/${id}`} class="btn btn-outline btn-primary btn-xs  rounded-tl-none rounded-tr-md rounded-br-none">Details</Link>
            </div>
        </div>
    );
};

export default Project;