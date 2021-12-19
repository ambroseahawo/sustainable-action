import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Footer from './components/footer/Footer'
import './App.css'

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/about' component={ AboutUs } />
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App
