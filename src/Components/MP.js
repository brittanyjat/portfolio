import React from 'react';
import mp from '../assets/mp.png';

export default function MP() {
    return (
        <div className='project-detail'>
            <h3>{'< Mountain Project Clone >'}</h3>
            <div className='description-image-container'>
                <div className='image-link-container'>
                    <img src={mp} alt='mountain-project' />
                </div>
                <div className='description-container'>
                    <br />
                    <span>Group developed full stack web application that acts as a resource for members of the climbing community to find routes.</span>
                    <hr />
                    <span>Climbers are able to keep track of their own To-Dos and Ticks. Uses charts to display stats on each user in their profile.</span>
                    <hr />
                    <span>Users can add and edit information on the site</span>
                    <hr />
                    <span>Implemented advanced SQL queries to maintain database</span>
                    <hr />
                    <div>
                        <a href='https://breed101.brittanyjat.com'><span>{'{ Live Site }'}</span></a>
                        <a href='https://youtu.be/KNT28elQM8o'><span>{'{ Walk-through }'}</span></a>
                        <a href='https://github.com/group-project-mp/mountain-project'><span>{'{ Github }'}</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
