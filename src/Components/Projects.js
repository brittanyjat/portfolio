import React from 'react';
import Breed from './Breed';
import MP from './MP';
import Jpaints from './Projects/Jpaints';

export default function Projects() {
    return (
        <div className='section'>
            <h2>Projects</h2>
            <br />

            <Breed />
            <MP />
            <Jpaints />
        </div>

    )
}
