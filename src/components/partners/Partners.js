import React from 'react'
import MOH from '../../assets/images/MOH.png'
import KMET from '../../assets/images/KMET.jpg'
import OIRD from '../../assets/images/OIRD.jpg'
import './partners.css'

const Partners = () => {
    return (
        <section id="clients" class="section-bg">
            <div class="container">
                <div class="section-header">
                    <h3 className="partners-heading">our partners</h3>
                </div>
                <div class="align-center row no-gutters clients-wrap clearfix wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp'}}>
                    <div class="logo-item col-lg-3 col-md-4 col-xs-6">
                        <div class="client-logo"> 
                            <img src={ MOH } class="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div class="logo-item col-lg-3 col-md-4 col-xs-6">
                        <div class="client-logo"> 
                            <img src={ KMET } class="img-fluid" alt=""/> 
                        </div>
                    </div>
                    <div class="logo-item col-lg-3 col-md-4 col-xs-6">
                        <div class="client-logo"> 
                            <img src={ OIRD } class="img-fluid" alt=""/> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
