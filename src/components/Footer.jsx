import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
        <div className="row pt-5 pb-3">
            <div className="col-lg-10 col-md-12 col-12">
              <h2 className="footer-logo">FA</h2>
              Fahrezi Alwi Portfolio Website
            </div>
            <div className="col-lg-2 col-md-12 col-12">
              <a href="mailto:fahrezialwi@gmail.com" className="social-icon ml-0">
                <FontAwesomeIcon icon={faEnvelope}/>
              </a>
              <a href="https://github.com/in/fahrezialwi" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub}/>
              </a>
              <a href="https://www.linkedin.com/in/fahrezialwi" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
              <a href="https://www.instagram.com/fahrezialwi" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </div>
          </div>
          <div className="row pt-3 pb-4">
            <div className="col-12 text-center">
              ©2019 Fahrezi Alwi
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer