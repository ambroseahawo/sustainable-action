import React from 'react'
import './banner.css'

const Banner = () => {
    return (
        <section className="banner-area">
            <div className="container banner-content">
                <div className="row">
                    <div className="mt-0 greater-z-index text-center">
                        <h1>welcome to</h1>
                        <h1>sustainable action</h1>

                        <a href='/about' className="template-btn mt-3">About us</a>
                        <a href='#rs-footer' className="template-btn mt-3">Contact us</a>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </section>
    )
}

export default Banner
