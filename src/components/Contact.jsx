import React, { Component } from 'react'
import Header from './Header'
import '../styles/contact.css'

class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>Contact Us</h4>
                            <form>
                                <input type="text" className="form-control mb-4"  name="name" placeholder="Name" required/>
                                <input type="email" className="form-control mb-4" name="email" placeholder="E-mail" required/>
                                <input type="text" className="form-control mb-4" name="subject" placeholder="Subject" required/>
                                <textarea name="message" className="form-control mb-4" placeholder="Your message" rows="8" required/>
                                <button className="btn-main">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact