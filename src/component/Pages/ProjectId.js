import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectId = () => {
    const {id} = useParams()
    const [projectDetails, setProjectDetails] = useState([])
    useEffect(()=>{
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjectDetails(data))
    },[])
    return (
        <div className='bg-accent h-auto pt-24 pb-24'>
            <h3>id:{id} project:{projectDetails.length}</h3>
        </div>
    );
};

export default ProjectId;