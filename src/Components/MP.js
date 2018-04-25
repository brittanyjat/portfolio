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
                    <span>Through Redux, climbers are able to manage their To-Dos and Ticks.</span>
                    <hr />
                    <span>Users can add and edit information on the site. One tool available is the Cloudinary image uploader.</span>
                    <hr />
                    <span>Used CTEs and advanced SQL queries to create and maintain database.</span>
                    <hr />
                    <span>Implemented Chart.js to display stats on each user in their profile.</span>
                    <hr />
                    <div>
                        <a href='https://brittanyjat.com'><span>{'{ Live Site }'}</span></a>
                        <a ><span>{'{ Walk-through }'}</span></a>
                        <a href='https://github.com/group-project-mp/mountain-project'><span>{'{ Github }'}</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
