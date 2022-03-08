import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import HeaderHome from './HeaderHome'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-vertical-timeline-component/style.min.css'
import '../styles/home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderHome/>
        <div className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-9 pr-5">
                <h5>Hello, I am</h5>
                <h1>Fahrezi Alwi</h1>
                <p>I am a front-end developer experienced in developing front-end and user interface for websites. I am truly passionate about my work and always eager to learn about new technology in the web application.</p>
                <Link to="/portfolio"><button className="btn btn-home mt-3">See Portfolio</button></Link>
              </div>
              <div className="col-3">
                <img src="/images/photo.jpg" alt="Fahrezi Alwi" className="profile-picture"/>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-section">
          <VerticalTimeline>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Apr 2018 - May 2019"
              iconStyle={{ background: '#07627d', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
            >
              <h3 className="vertical-timeline-element-title">PT Jojonomic Indonesia</h3>
              <h5 className="vertical-timeline-element-subtitle mt-2">Front-End Developer</h5>
              <ul className="mt-3">
                <li>Make Officeless Operating System (OOS) application using Vue.js frameworks, Vuex global store, Bootstrap Vue.</li>
                <li>Build responsive Jojopro application using HTML, CSS, JQuery, PHP.</li>
                <li>Develop custom application for clients based on Jojonomic application using Vue.js frameworks, Vuex.</li>
                <li>Create own custom reusable component for rapid developing.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Jul 2019 - Nov 2019"
              iconStyle={{ background: '#07627d', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faGraduationCap}/>}
            >
              <h3 className="vertical-timeline-element-title">Purwadhika Startup and Coding School</h3>
              <h5 className="vertical-timeline-element-subtitle mt-2">Full Stack Web and Mobile Development Program</h5>
              <p>
                Create websites and mobile applications using React, React Native, Node.js, and Express.js.<br/>
                Other tools: Redux, JWT, RESTful API, GraphQL, MySQL, MongoDB, Firebase, NPM, Webpack, Git, AWS, Apache, Nginx.<br/>
                Final project: Travel booking platform, cravelio.com (Best project).<br/>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Apr 2018 - May 2019"
              iconStyle={{ background: '#07627d', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
            >
              <h3 className="vertical-timeline-element-title">PT GIF Seribu Pulau</h3>
              <h5 className="vertical-timeline-element-subtitle mt-2">Front-End Developer</h5>
              <ul className="mt-3">
                <li>Make UI design of client's websites and mobile applications with Adobe XD, Illustrator, and Photoshop.</li>
                <li>Build responsive web design using vanilla HTML, CSS, Javascript, PHP.</li>
                <li>Develop websites faster using frameworks such as Bootstrap, Foundation, SASS, jQuery.</li>
                <li>Create and edit Wordpress template.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Mar 2017 - Mar 2018"
              iconStyle={{ background: '#07627d', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
            >
              <h3 className="vertical-timeline-element-title">Dexcode Indotama</h3>
              <h5 className="vertical-timeline-element-subtitle mt-2">Web Designer</h5>
              <ul className="mt-3">
                <li>Make UI design (wireframe, mockup) of client's websites in Photoshop and Sketch.</li>
                <li>Implement design with HTML, CSS, Bootstrap, Javascript, jQuery, React, Ruby on Rails.</li>
                <li>Manage the SEO of the company's website.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Aug 2012 - Sep 2016"
              iconStyle={{ background: '#07627d', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faGraduationCap}/>}
            >
              <h3 className="vertical-timeline-element-title">Institut Teknologi Sepuluh Nopember</h3>
              <h5 className="vertical-timeline-element-subtitle mt-2">Electrical Engineering</h5>
              <p>
                Specializing in Industrial Electronic Engineering. Create a three-axis stabilization system for action camera in a surveillance robot using Fuzzy method.<br/>
                Tools: C, C++, Arduino, and OpenCV (Visual Basic).
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Let’s Create Something Big</h2>
                <p>Have an idea you'd like to discuss? Just want to say hi? Let's chat.</p>
                <Link to="/contact"><button className="btn btn-home mt-3">Contact Me</button></Link>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home