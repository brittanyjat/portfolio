import React from 'react';
import jpaints from '../../assets/jpaints.png';

export default function Breed() {
    return (
        <div className='project-detail breed-section'>
            <h3>{'< JPaints Utah >'}</h3>
            <div className='description-image-container'>
                <div className='description-container'>
                    <br />
                    <span>Allows customers to submit requests for residential and commercial painting through nodemailer.</span>
                    <hr />
                    <span>Used the Instagram API to allow client to easily display portfolio photos on site.</span>
                    <hr />
                    <span>Designed and developed fully responsive app using Sass and media queries.</span>
                    <hr />
                    <div>
                        <a href='https://jpaintsutah.com'><span>{'{ Live Site }'}</span></a>
                        {/* <a href='https://youtu.be/33RxH2rq9x4'><span>{'{ Walk-through }'}</span></a> */}
                        <a href='https://github.com/brittanyjat/jpaints2.0'><span>{'{ Github }'}</span></a>
                    </div>
                </div>

                <div className='image-link-container'>
                    <a href='https://jpaintsutah.com'><img src={jpaints} alt='jpaints' /></a>
                </div>
            </div>
        </div>
    )
}
