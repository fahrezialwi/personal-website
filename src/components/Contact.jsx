import React, { Component } from 'react'
import { toast } from 'react-toastify'
import HeaderMenu from './HeaderMenu'
import Footer from './Footer'
import emailjs from 'emailjs-com'
import '../styles/contact.css'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      loading: false
    }
  }

  onSendClick = (e) => {
    e.preventDefault()

    this.setState({
      loading: true
    })

    let variables = {
      message_html: this.state.message,
      from_name: this.state.name,
      from_email: this.state.email
    }

    emailjs.send('zoho', 'template_ocHMIH5v', variables, 'user_Hg8YO7Kpe3A0FdJlKNYBR')
    .then((res) => {
      this.setState({
        loading: false,
        name: '',
        email: '',
        message: ''
      })

      this.refs.name.value = ''
      this.refs.email.value = ''
      this.refs.message.value = ''
      
      toast("Thank you. Message has been sent.", {
        position: toast.POSITION.BOTTOM_CENTER,
        className: 'toast-container'
      })
    }).catch((err) => {
      this.setState({
        loading: false,
        name: '',
        email: '',
        message: ''
      })

      this.refs.name.value = ''
      this.refs.email.value = ''
      this.refs.message.value = ''

      toast("An error occurred.", {
        position: toast.POSITION.BOTTOM_CENTER,
        className: 'toast-container'
      })

      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <HeaderMenu/>
        <div className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Contact</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-12">
              <form onSubmit={this.onSendClick}>
                <input type="text" onChange={e => this.setState({name: e.target.value})} className="form-control mb-4" ref="name" placeholder="Name"/>
                <input type="email" onChange={e => this.setState({email: e.target.value})} className="form-control mb-4" ref="email" placeholder="E-mail"/>
                <textarea name="message" onChange={e => this.setState({message: e.target.value})} className="form-control mb-4" ref="message" placeholder="Your message" rows="8"/>
                <div className="text-center">
                  {
                    this.state.loading ?
                    <div className="not-allowed">
                      <button className="btn-contact btn-menu pointer-events-none">
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      </button>
                    </div>
                    :
                    <button className="btn-contact btn-menu" onClick={this.onSendClick}>
                        Send
                    </button>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Contact