import React from 'react'
import Logo from '../../assets/images/logo.png'
import './footer.css'

const Footer = () => {
    return (
        <footer id='rs-footer' className="rs-footer footer-style-1">
        <div className="footer-top" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 footer-0">
                        <div className="footer-logo-wrap">
                            <a href="/" className="footer-top-logo">
                                <img style={{ height: '60px' }} src={ Logo } alt=""/>
                            </a>
                        </div>
                        <section id="text-2" className="widget widget_text">
                            <div className="textwidget">
                                <div>To serve families and communities in vulnerable conditions by strengthening capacity for self-reliance. The organization has grown by maximizing on the potential of people focusing on small doable things that can make a difference.</div>
                            </div>
                        </section>
                        
                    </div>
                    <div id="contact-us" className="col-lg-3 footer-1">
                        <section id="contact_widget-2" className="widget widget_contact_widget">
                            <h3 className="footer-title">Address</h3>
                            <ul className="fa-ul">
                                <li className="address1"><i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>Ndere Market, along Siaya- Rangala Road</span>
                                </li>
                                <li id="contact-link"><i className="icon-flipped fa fa-phone" aria-hidden="true"></i><a href="tel:(+254)722-674622">(+254)722-674622 - Celine Oduol</a></li>
                                <li id="contact-link"><i className="fa fa-envelope" aria-hidden="true"></i>
                                    <a href="mailto:sustainableactionsa@gmail.com">sustainableactionsa@gmail.com</a>
                                </li>
                                <li id="contact-link"><i className="fa fa-address-card" aria-hidden="true"></i>
                                    <span>P.O BOX 915 – 40100 SIAYA</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer
