import React from 'react';
import { FaCode, FaDatabase, FaGlobe, FaInfo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {

    const { liveLink, gitHubClient, gitHubServer, img, id, titleName, aboutSite } = project
    return (
        <div class="card rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl border ">
            <figure class="">
                <img src={img} alt="img" />
            </figure>
            <div className='mt-4 px-2'>
                <h2 className='text-2xl text-white'>{titleName} - <span className='text-lg'>{aboutSite}</span></h2>
            </div>
            <div className=' mt-10 px-2 pb-4 grid grid-cols-4 gap-4'>
                <a className='btn btn-circle btn-primary btn-outline mr-2' target='_blank' rel="noopener noreferrer" href={liveLink}><FaGlobe className='text-2xl'></FaGlobe></a>
                <a className='btn btn-circle btn-primary btn-outline mr-2' target='_blank' rel="noopener noreferrer" href={gitHubClient}><FaCode className='text-2xl'></FaCode></a>
                {gitHubServer && <a className='btn btn-circle btn-primary btn-outline' target='_blank' rel="noopener noreferrer" href={gitHubServer} ><FaDatabase className='text-2xl'></FaDatabase></a>}
                <Link to={`/projectId/${id}`}className='btn btn-circle btn-primary btn-outline' ><FaInfo className='text-xl'></FaInfo></Link>
            </div>
        </div>
    );
};

export default Project;