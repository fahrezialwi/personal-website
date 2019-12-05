import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import ProfilePicture from '../images/photo.jpg'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-vertical-timeline-component/style.min.css'
import '../styles/home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="hero-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
                                <h6>Hello, I'm</h6>
                                <h1>Fahrezi Alwi</h1>
                                <p>Experienced in developing front-end and user interface for websites and mobile apps.</p>
                                <button className="btn btn-main">See Portfolio</button>
                            </div>
                            <div className="col-3">
                                <img src={ProfilePicture} alt="Fahrezi Alwi" className="profile-picture"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timeline-section">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="Aug 2012 - Sep 2016"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faGraduationCap}/>}
                        >
                            <h3 className="vertical-timeline-element-title">Undergraduate Student</h3>
                            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Sepuluh Nopember</h4>
                            <p>
                                Electrical Engineering, Institut Teknologi Sepuluh Nopember Surabaya
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="Mar 2017 - Mar 2018"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase}/>}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Dexcode Indotama</h4>
                            <ul>
                                <li>Make sketch and user-friendly design of website in Photoshop.</li>
                                <li>Implement design with HTML, CSS, Javascript and its derived technologies.</li>
                                <li>Manage SEO of a website.</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Apr 2018 - May 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase}/>}
                        >
                            <h3 className="vertical-timeline-element-title">Front-End Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">PT GIF Seribu Pulau</h4>
                            <ul>
                                <li>Make UI design of website and mobile application with Adobe XD, Adobe Illustrator, and Adobe Photoshop.</li>
                                <li>Implement responsive web design with HTML5, CSS3, Javascript.</li>
                                <li>Create faster development using frameworks such as Bootstrap, Foundation, SASS, JQuery.</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="Jul 2019 - Nov 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faGraduationCap}/>}
                        >
                            <h3 className="vertical-timeline-element-title">Student</h3>
                            <h4 className="vertical-timeline-element-subtitle">Purwadhika Startup and Coding School</h4>
                            <p>
                                Full Stack Javascript Web and Mobile App course using React, React Native, Node.js, and Express.js.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        )
    }
}

export default Home