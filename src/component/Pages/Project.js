import React from 'react';

const Project = ({ project }) => {
    const { liveLink, gitHubClient, gitHubServer, img } = project
    return (
        <div class="card w-full rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl border ">
            <figure class="">
                <img src={img} alt="img" class="w-full h-screen" />
            </figure>
            <div className=' mt-10 px-2 pb-4 grid grid-cols-3 gap-4'>
                <a target='_blank' rel="noopener noreferrer" href={liveLink} class="btn btn-outline btn-primary btn-xs  rounded-tl-none rounded-tr-md rounded-br-none">Live</a>
                <a target='_blank' rel="noopener noreferrer" href={gitHubClient} class="btn btn-outline btn-primary btn-xs  rounded-tl-none rounded-tr-md rounded-br-none">GitHub Client</a>
                {gitHubServer && <a target='_blank' rel="noopener noreferrer" href={gitHubServer} class="btn btn-outline btn-primary btn-xs rounded-tl-none rounded-tr-md rounded-br-none">GitHub Server</a>}
            </div>
        </div>
    );
};

export default Project;