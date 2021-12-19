import React from 'react'
import MOH from '../../assets/images/MOH.png'
import KMET from '../../assets/images/KMET.jpg'
import OIRD from '../../assets/images/OIRD.jpg'
import './partners.css'
import Item from './item/Item'

const Partners = () => {
    return (
        <section className="partners-section">
            <div className="container">
                 <div className="section-header">
                    <h3 className="partners-heading">our partners</h3>
                </div>
                <div className="row g-4">
                    <Item img={MOH}/>
                    <Item img={KMET}/>
                    <Item img={OIRD}/>
                </div>
            </div>
        </section>
    )
}

export default Partners
