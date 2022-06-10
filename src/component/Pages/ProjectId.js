import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectId = () => {
    const {id} = useParams()
    const idjson = JSON.parse(id)
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [id])
    const project = projects.filter(project => project.id === idjson)
    console.log(project)

    return (
        <div className='bg-accent h-auto pt-24 pb-24'>
           <h2>project{project.liveLink}</h2>
           <img src={project.img} alt="" />
        </div>
    );
};

export default ProjectId;