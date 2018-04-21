import React, { Component } from 'react';
import bg1 from '../assets/bg1.jpeg'
import windowSize from 'react-window-size';

class Hero extends Component {
    constructor() {
        super();

        this.state = {
            scrollPosition: null
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(e) {
        this.setState({ scrollPosition: window.scrollY })
    }

    jumpTo(prop) {
        let element = document.getElementById(prop);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    render() {
        const { scrollPosition } = this.state;
        const { windowHeight } = this.props;
        return (
            <div>
                <div className={scrollPosition > windowHeight ? 'blue-nav nav-bar' : 'hero-nav nav-bar' }>
                    <span onClick={(e) => this.jumpTo('hero')}>Home</span>
                    <span onClick={(e) => this.jumpTo('about')}>About</span>
                    <span onClick={(e) => this.jumpTo('skills')}>Skills</span>
                    <span onClick={(e) => this.jumpTo('projects')}>Projects</span>
                    <span onClick={(e) => this.jumpTo('contact')}>Contact</span>
                </div>
                <div className='my-title' style={{ backgroundImage: `url(${bg1})` }}>
                    <div>
                        <h1>Brittany Jones</h1>
                        <h2>{'{ Web Developer }'}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default windowSize(Hero);