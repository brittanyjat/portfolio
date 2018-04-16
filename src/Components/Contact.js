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
        this.handleInput = this.handleInput.bind(this);
        this.handleTest = this.handleTest.bind(this);
    }

    handleInput(prop, value) {
        // console.log(prop, value)
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
                <div id='contact'>
                <input placeholder='Email' onChange={(event) => this.handleInput('from', event.target.value)} />
                <input placeholder='Name' onChange={(event) => this.handleInput('name', event.target.value)} />
                <input placeholder='Phone ' onChange={(event) => this.handleInput('number', event.target.value)} />
                <input placeholder='Subject' onChange={(event) => this.handleInput('subject', event.target.value)} />
                <input placeholder="I am interested in your Dev skills!" onChange={(event) => this.handleInput('text', event.target.value)} />
                <button onClick={(e) => this.handleTest()}>Submit</button>
                <ToastContainer position='bottom-center' />
                </div>
            </div>
        )
    }
}