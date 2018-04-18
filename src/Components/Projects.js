import React, { Component } from 'react';
import breed101 from '../assets/breed101.png';

export default function Projects() {
    return (
        <div className='section'>
            <h2>Projects</h2>

            <div id='project-detail'>
                <h3>{'< Breed101 >'}</h3>
                {/* <span>Full stack web application that educates users on which dog breed is right for them based on various characteristics</span> */}

                <div className='project-image'>
                    <img src={breed101} alt='breed101' />
                    <div className='project-links'>
                        <a href='https://breed101.brittanyjat.com'><h4>Live Site</h4></a>
                        <a href='https://youtu.be/KNT28elQM8o'><h4>Walk-through</h4></a>
                        <a href='https://github.com/brittanyjat/breed101'><h4>Github</h4></a>
                    </div>
                </div>

            </div>
        </div>

    )
}
