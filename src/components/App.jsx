import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'
import '../styles/global.css'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Route path='/' exact component={Home}/>
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contact' component={Contact} />
            </BrowserRouter>
        )
    }
}

export default App