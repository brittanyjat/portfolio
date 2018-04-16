import React from 'react';

export default function About() {
    return (
        <div className='section about'>
            <h2>About</h2>
            <div className='quote'>
                <h4>"It is never too late to be what you might have been."</h4>
                <h3> -George Eliot</h3>
            </div>

            <div className='bio'>
                <img src='https://res.cloudinary.com/dtkadxjhq/image/upload/v1523594052/F6CCDCD7-0705-42A5-AB2E-8E6049AF0F65_vfuipd.jpg' alt='me' />
                <h4>For as long as I can remember I have been passionate about graphic and web design. After working in screen and digital printing for nearly 10 years, I decided to take a leap of faith and pursue a career in web development. I am passionate about type, tech, the outdoors, movies, and dogs.</h4>
            </div>
        </div>
    )
}