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

export default function Skills() {
    return (
        <div className='skills'>
            <h2 className='section'>Skills</h2>
            <div className='skill-container'>
                <div>
                    <img src={react} alt='skill' />
                    <h3>React</h3>
                </div>
                <div>
                    <img src={js} alt='skill' />
                    <h3>Javascript</h3>
                </div>
                <div>
                    <img src={node} alt='skill' />
                    <h3>Node</h3>
                </div>
                <div>
                    <img src={redux} alt='skill' />
                    <h3>Redux</h3>
                </div>
                <div>
                    <img src={css3} alt='skill' />
                    <h3>CSS</h3>
                </div>
                <div>
                    <img src={express} alt='skill' />
                    <h3>Express</h3>
                </div>
                <div>
                    <img src={git} alt='skill' />
                    <h3>Git</h3>
                </div>
                <div>
                    <img src={rest} alt='skill' />
                    <h3>Restful API</h3>
                </div>
                <div>
                    <img src={html} alt='skill' />
                    <h3>HTML5</h3>
                </div>
                <div>
                    <img src={jest} alt='skill' />
                    <h3>Jest</h3>
                </div>
                <div>
                    <img src={postgresql} alt='skill' />
                    <h3>Postgresql</h3>
                </div>
                <div>
                    <img src={sass} alt='skill' />
                    <h3>Sass</h3>
                </div>
            </div>
            <br />
        </div>
    )
}
