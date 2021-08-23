import React from 'react'
import Banner from '../components/banner/Banner'
import Partners from '../components/partners/Partners'
import Statements from '../components/statements/Statements'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <React.Fragment>
            <Banner/>
            <Partners/>
            <Statements/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home
