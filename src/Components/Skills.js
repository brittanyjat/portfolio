import React from 'react';
import react from '../assets/react.png';
import js from '../assets/js.png';
import node from '../assets/node.png';
import redux from '../assets/redux.png';
import css3 from '../assets/css.png';
import express from '../assets/express.png';
import git from '../assets/git.png';
import html from '../assets/html.png';
import jest from '../assets/jest.png';
import postgresql from '../assets/postgresql.png';
import rest from '../assets/rest.png';
import sass from '../assets/sass.png';
import massive from '../assets/massive.png';
import adobe from '../assets/adobe.png';
export default function Skills() {
    return (
        <div className='section skills'>
            <h2>Skills</h2>
            <div className='skill-sub'>
                <br/>
                <h3>{'< '}Essentials{' >'}</h3>
                <div className='skill-container'>
                    <div>
                        <img src={js} alt='skill' />
                        <h5>Javascript</h5>
                    </div>
                    <div>
                        <img src={css3} alt='skill' />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img src={html} alt='skill' />
                        <h5>HTML</h5>
                    </div>
                </div>
                <h3>{'< '}Front End{' >'}</h3>
                <div className='skill-container'>
                    <div>
                        <img src={react} alt='skill' />
                        <h5>React</h5>
                    </div>
                    <div>
                        <img src={redux} alt='skill' />
                        <h5>Redux</h5>
                    </div>
                    <div>
                        <img src={sass} alt='skill' />
                        <h5>Sass</h5>
                    </div>
                </div>
                <h3>{'< '}Back End{' >'}</h3>
                <div className='skill-container'>
                    <div>
                        <img src={express} alt='skill' />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <img src={node} alt='skill' />
                        <h5>Node</h5>
                    </div>
                    <div>
                        <img src={rest} alt='skill' />
                        <h5>RESTful API</h5>
                    </div>
                </div>
                <h3>{'< '}Database{' >'}</h3>
                <div className='skill-container'>
                    <div>
                        <img src={postgresql} alt='skill' />
                        <h5>PostgreSQL</h5>
                    </div>
                    <div>
                        <img src={massive} alt='skill' />
                        <h5>Massive</h5>
                    </div>
                </div>
                <h3>{'< '}Other{' >'}</h3>
                <div className='skill-container'>
                    <div>
                        <img src={git} alt='skill' />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img src={jest} alt='skill' />
                        <h5>Jest</h5>
                    </div>
                    <div>
                        <img src={adobe} alt='skill' />
                        <h5>Adobe Creative</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
