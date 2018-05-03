import React from 'react';
import breed101 from '../assets/breed101.png';

export default function Breed() {
    return (
        <div className='project-detail breed-section'>
            <h3>{'< Breed101 >'}</h3>
            <div className='description-image-container'>
                <div className='description-container'>
                    <br />
                    <span>Personally developed full stack web application that educates users on which dog breed is right for them based on various characteristics.</span>
                    <hr />
                    <span>Uses Redux to manage all state of the application such as questionnaire to match user to specific breed. </span>
                    <hr />
                    <span>Built with React components including advanced filtering component to narrow down and sort search results. </span>
                    <hr />
                    <span>Designed and developed fully responsive app using Sass and media queries.</span>
                    <hr />
                    <div>
                        <a href='https://breed101.brittanyjat.com'><span>{'{ Live Site }'}</span></a>
                        <a href='https://youtu.be/33RxH2rq9x4'><span>{'{ Walk-through }'}</span></a>
                        <a href='https://github.com/brittanyjat/breed101'><span>{'{ Github }'}</span></a>
                    </div>
                </div>

                <div className='image-link-container'>
                    <a href='https://breed101.brittanyjat.com'><img src={breed101} alt='breed101' /></a>
                </div>
            </div>
        </div>
    )
}
