import React from 'react';
import bg1 from '../assets/bg1.jpeg';

export default function NavBar(props) {
    return (
        <div
            className='menu-links'
        style={props.scrollPosition > 285 ? { backgroundImage: `url(${bg1})` } : null}
        >
            <div>
                <i class="far fa-keyboard"></i>
                <span>Brittany Jones</span>
            </div>
            <div>
                <span className='link' onClick={(e) => this.jumpTo('hero')}>Home</span>
                <span className='link' onClick={(e) => this.jumpTo('about')}>About</span>
                <span className='link' onClick={(e) => this.jumpTo('skills')}>Skills</span>
                <span className='link' onClick={(e) => this.jumpTo('projects')}>Projects</span>
                <span className='link' onClick={(e) => this.jumpTo('contact')}>Contact</span>
            </div>
        </div>
    )
}