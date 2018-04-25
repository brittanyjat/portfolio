import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default class Contact extends Component {
    constructor() {
        super();

        this.state = {
            from: '',
            subject: '',
            text: '',
            name: '',
            number: ''
        }
    }

    handleInput(prop, value) {
        this.setState({
            [prop]: value
        })
    }

    handleTest() {
        let body = {
            from: this.state.from,
            subject: this.state.subject,
            text: this.state.text,
            name: this.state.name,
            number: this.state.number
        }
        axios.post('/api/email', body).then(res => {
            res.status === 200
                ? toast.success('Your message has been sent!')
                : toast.error('Error sending message, please try again')
        })
    }

    render() {
        return (
            <div className='section contact'>
                <h2>Contact</h2>
                <div className='contact-form'>
                    <h3>Name</h3>
                    <input placeholder='name' onChange={(event) => this.handleInput('name', event.target.value)} />
                    <br />

                    <h3>Email</h3>
                    <input placeholder='email' onChange={(event) => this.handleInput('from', event.target.value)} />
                    <br />

                    <h3>Phone</h3>
                    <input placeholder='phone ' onChange={(event) => this.handleInput('number', event.target.value)} />
                    <br />

                    <h3>Subject</h3>
                    <input placeholder='subject' onChange={(event) => this.handleInput('subject', event.target.value)} />
                    <br />

                    <h3>Message</h3>
                    <textarea placeholder="I'm interested in your sweet Dev skills!" onChange={(event) => this.handleInput('text', event.target.value)} />
                    <br />
                    
                    <button onClick={(e) => this.handleTest()}>Submit</button>
                    <ToastContainer position='bottom-center' />
                </div>
            </div>
        )
    }
}