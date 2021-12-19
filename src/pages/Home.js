import React from 'react'
import Banner from '../components/banner/Banner'
import Partners from '../components/partners/Partners'
import Statements from '../components/statements/Statements'

const Home = () => {
    return (
        <React.Fragment>
            <Banner/>
            <Partners/>
            <Statements/>
        </React.Fragment>
    )
}

export default Home
