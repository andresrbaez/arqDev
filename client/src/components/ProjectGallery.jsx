import React, { useState } from 'react';
import ImgGallery from './ImgGallery';

const ProjectGallery = ({project, setShowImg, showImg}) => {





    return (
        <div className='w-full border mt-8'>
            <h1>Galería del proyecto: {project.title}</h1>
            <ul className='grid grid-cols-3 gap-2'>
                <li className='w-full border cursor-pointer' onClick={() => setShowImg(!showImg)} >1</li>
                <li className='w-full border cursor-pointer' onClick={() => setShowImg(!showImg)} >2</li>
                <li className='w-full border cursor-pointer' onClick={() => setShowImg(!showImg)} >3</li>
                <li className='w-full border cursor-pointer' onClick={() => setShowImg(!showImg)} >4</li>
                <li className='w-full border cursor-pointer' onClick={() => setShowImg(!showImg)} >5</li>
                <li className='w-full border cursor-pointer' onClick={() => setShowImg(!showImg)} >6</li>
                <li className='w-full border cursor-pointer' onClick={() => setShowImg(!showImg)} >7</li>
                <li className='w-full border cursor-pointer' onClick={() => setShowImg(!showImg)} >8</li>
            </ul>

            {showImg === true && <ImgGallery setShowImg={setShowImg} project={project} />}
        </div>
    );
};

export default ProjectGallery;