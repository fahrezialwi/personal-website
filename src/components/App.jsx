import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from './ScrollToTop'
import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/global.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ToastContainer hideProgressBar={true}/>
        <ScrollToTop/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App