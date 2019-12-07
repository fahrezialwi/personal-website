import React, { Component } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import HeaderMenu from './HeaderMenu'
import Footer from './Footer'
import '../styles/portfolio.css'

let data = [
  {
    picture: 'cravelio.png',
    title: 'Cravelio',
    client: 'Personal',
    role: 'UI Design, Front-End, and Back-End',
    period: 'October 2019 - November 2019',
    description: 'Travel booking platform using React. Admin page login email: admin@gmail.com, password: 123456',
    responsibility: 'Make the whole design and page from scratch',
    tools: 'React, Redux, Express, MySQL, Nodemailer, Bootstrap, CSS, AWS',
    link: 'https://www.cravelio.com',
    github: 'https://github.com/fahrezialwi/cravelio'
  },
{
    picture: 'tukupedia.png',
    title: 'Tukupedia',
    client: 'Personal',
    role: 'Front-End and Back-End',
    period: 'September 2019',
    description: 'E-commerce platform using React',
    responsibility: 'Make the whole page from scratch',
    tools: 'React, Redux, Express, MySQL, Bootstrap, CSS, AWS',
    link: 'https://tukupedia.fahrezialwi.com',
    github: 'https://github.com/fahrezialwi/tukupedia'
  },
  {
    picture: 'titanic.png',
    title: 'Titanic Manifest',
    client: 'Personal',
    role: 'UI Design, Front-End, and Back-End',
    period: 'September 2019',
    description: 'RMS Titanic passenger list application',
    responsibility: 'Make the whole design and page from scratch',
    tools: 'React, Express, MySQL, HTML, CSS, Bootstrap, AWS',
    link: 'https://titanic.fahrezialwi.com',
    github: 'https://github.com/fahrezialwi/titanic-manifest'
  },
  {
    picture: 'omdb.png',
    title: 'OMDb Movie Search',
    client: 'Personal',
    role: 'UI Design and Front-End',
    period: 'August 2019',
    description: 'Movie search application using OMDb API, support load more function',
    responsibility: 'Make the whole design and page from scratch',
    tools: 'React, HTML, CSS, Bootstrap, OMDb API, AWS',
    link: 'https://omdb.fahrezialwi.com',
    github: 'https://github.com/fahrezialwi/omdb-movie-search'
  },
  {
    picture: 'unsplash.png',
    title: 'Unsplash Image Search',
    client: 'Personal',
    role: 'UI Design and Front-End',
    period: 'August 2019',
    description: 'Image search application using Unsplash API, support infinite scrolling',
    responsibility: 'Make the whole design and page from scratch',
    tools: 'React, HTML, CSS, Bootstrap, Unsplash API, AWS',
    link: 'https://unsplash.fahrezialwi.com',
    github: 'https://github.com/fahrezialwi/unsplash-image-search'
  },
  {
    picture: 'monytai.png',
    title: 'Monytai Website',
    client: 'Monytai',
    role: 'UI Design and Front-End',
    period: 'December 2018',
    description: 'Official website of Monytai, a construction consultant company',
    responsibility: 'Make the whole design of the website',
    tools: 'Wordpress, Photoshop',
    link: 'https://www.monytai.com',
    github: '-'
  },
  {
    picture: 'kurniapurnamatama.png',
    title: 'Kurnia Purnamatama Website',
    client: 'PT Kurnia Purnamatama',
    role: 'UI Design and Front-End',
    period: 'November 2018',
    description: 'Official website of PT Kurnia Purnamatama, a construction consultant company',
    responsibility: 'Make the whole design of the website',
    tools: 'Wordpress, Photoshop',
    link: 'https://www.kurniapurnamatama.com',
    github: '-'
  },
  {
    picture: 'ciptaseribu.png',
    title: 'Cipta Seribu Pulau Website',
    client: 'PT Cipta Seribu Pulau',
    role: 'UI Design and Front-End',
    period: 'October 2018',
    description: 'Official website of PT Cipta Seribu Pulau, a property development company',
    responsibility: 'Make the whole design from scratch, make company logo',
    tools: 'HTML, CSS, Bootstrap, Responsive Web, Illustrator, Photoshop',
    link: 'https://www.ciptaseribu.com',
    github: '-'
  },
  {
    picture: 'ecoramahlestari.png',
    title: 'ECO Ramah Lestari Website',
    client: 'PT ECO Ramah Lestari',
    role: 'UI Design and Front-End',
    period: 'July 2018 - August 2018',
    description: 'Official website of PT ECO Ramah Lestari, a plastic recycling company',
    responsibility: 'Make the whole design from scratch, make company logo',
    tools: 'HTML, CSS, Bootstrap, Responsive Web, PHP, Photoshop',
    link: 'http://www.ecoramahlestari.co.id',
    github: '-'
  },
  {
    picture: 'gifseribu.png',
    title: 'GIF Seribu Pulau Website',
    client: 'PT GIF Seribu Pulau',
    role: 'UI Design and Front-End',
    period: 'May 2018 - June 2018',
    description: 'Official website of PT GIF Seribu Pulau, a company provides web development services',
    responsibility: 'Make company logo and whole page of the website',
    tools: 'HTML, CSS, Bootstrap, Responsive Web, jQuery, PHP, Illustrator',
    link: 'https://www.gifseribu.com',
    github: '-'
  },
  {
    picture: 'astrilestaridesign.png',
    title: 'Astri Lestari Design Website',
    client: 'Astri Lestari Design',
    role: 'UI Design and Front-End',
    period: 'October 2017 - November 2017',
    description: 'Official e-commerce website of Astri Lestari Design',
    responsibility: 'Setting up the domain, hosting, Woocommerce, edit the existing template, changing the header, footer, title, cover page, color and some layout',
    tools: 'Photoshop, Wordpress, WooCommerce',
    link: 'https://astrilestaridesign.fahrezialwi.com',
    github: '-'
  },
  {
    picture: 'facilgo.png',
    title: 'Facilgo Website',
    client: 'Facilgo Inc.',
    role: 'UI Design',
    period: 'September 2017',
    description: 'Official website of Facilgo, a marketplace website for managing stuff and problem between real estate company and its supplier/contractor',
    responsibility: 'Make the home page, solutions page, markets page, suppliers page, pricing page, and about us page based from clients wireframe',
    tools: 'Photoshop',
    link: 'https://www.facilgo.co',
    github: '-'
  },
  {
    picture: 'dexcode.png',
    title: 'Dexcode Website',
    client: 'Dexcode Indotama',
    role: 'UI Design, Front-End, and SEO',
    period: 'March 2017 - May 2017',
    description: 'Official website of Dexcode, a company provides web and app development service',
    responsibility: 'Make the whole page of the website from scratch and manage its SEO',
    tools: 'HTML, CSS, Bootstrap, Javascript, Responsive Web, Ruby on Rails, Photoshop, Illustrator',
    link: 'https://www.dexcode.com',
    github: '-'
  },
  {
    picture: 'fahrezialwi.png',
    title: 'Personal Website (2017)',
    client: 'Personal',
    role: 'UI Design and Front-End',
    period: 'January 2017 - February 2017',
    description: 'Portfolio website of myself',
    responsibility: 'Make the whole page of website from scratch, setting up the domain, hosting, and file transfer',
    tools: 'HTML, CSS, Javascript, Responsive Web, Bootstrap',
    link: 'https://old.fahrezialwi.com',
    github: 'https://github.com/fahrezialwi/fahrezialwi.github.io'
  }
]

class Portfolio extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      picture: '',
      title: '',
      client: '',
      role: '',
      period: '',
      description: '',
      responsibility: '',
      tools: '',
      link: '',
      github: ''
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  modalOpen = (i) => {
    this.setState({
      picture: data[i].picture,
      title: data[i].title,
      client: data[i].client,
      role: data[i].role,
      period: data[i].period,
      description: data[i].description,
      responsibility: data[i].responsibility,
      tools: data[i].tools,
      link: data[i].link,
      github: data[i].github
    })

    this.toggle()
  }

  modal = () => {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
          <ModalBody>
            <div className="row">
              <div className="col-12">
                <img src={process.env.PUBLIC_URL + "/images/" +this.state.picture} alt={this.state.title} className="image-description"/>
                <h5 className="mt-3 mb-3">{this.state.title}</h5>
                <div className="row pb-1">
                  <div className="col-3 title-description">Client</div>
                  <div className="col-9">{this.state.client}</div>
                </div>
                <div className="row pb-1">
                  <div className="col-3 title-description">Role</div>
                  <div className="col-9">{this.state.role}</div>
                </div>
                <div className="row pb-1">
                  <div className="col-3 title-description">Period</div>
                  <div className="col-9">{this.state.period}</div>
                </div>
                <div className="row pb-1">
                  <div className="col-3 title-description">Description</div>
                  <div className="col-9">{this.state.description}</div>
                </div>
                <div className="row pb-1">
                  <div className="col-3 title-description">Responsibility</div>
                  <div className="col-9">{this.state.responsibility}</div>
                </div>
                <div className="row pb-1">
                  <div className="col-3 title-description">Tools</div>
                  <div className="col-9">{this.state.tools}</div>
                </div>
                <div className="row pb-1">
                  <div className="col-3 title-description">Link</div>
                  <div className="col-9"><a href={this.state.link} target="_blank" rel="noopener noreferrer">{this.state.link}</a></div>
                </div>
                <div className="row pb-1">
                  <div className="col-3 title-description">Github Repo</div>
                  <div className="col-9"><a href={this.state.github} target="_blank" rel="noopener noreferrer">{this.state.github}</a></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-right ml-auto">
                <div className="close-button" onClick={this.toggle}>Close</div>
              </div>  
            </div>
          </ModalBody>
        </Modal>
      </div>
    )
  }

  renderList = () => {
    return data.map((val, index) => {
      return (
        <div className="col-md-4 col-sm-6 col-12" key={index}>
          <div className="card mb-3" onClick={() => this.modalOpen(index)}>
            <img src={process.env.PUBLIC_URL + "/images/" + val.picture} className="card-img-top" alt={val.title}/>
            <div className="card-body">
              <h6 className="card-title">{val.title}</h6>
            </div>
          </div>
        </div>
      )
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
                <h2>Portfolio</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-5 pb-4"> 
            {this.renderList()}
            {this.modal()}
          </div>
          <div className="row pb-5"> 
            <div className="col-12 text-center">
              <a href={process.env.PUBLIC_URL + "/documents/portfolio.pdf"}>
                <button className="btn btn-menu">Download Full Portfolio</button>
              </a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Portfolio