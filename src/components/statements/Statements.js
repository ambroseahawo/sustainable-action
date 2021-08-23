import React from 'react'
import { StatementsData } from './StatementsData'
import './statements.css'

const Statements = () => {
    return (
        <React.Fragment>
            { StatementsData.map((statement, index) =>{
                return(
                    <section className="vision-area" key={ index }>
                        <div className="vision-container">
                            <h6 className="vision-sub-heading">{ statement.heading }</h6>
                            <p className="vision-description">{ statement.statement }</p>
                        </div>
                    </section>
                )
            })}
        </React.Fragment>
    )
}

export default Statements
