import React from 'react'

const Item = ({img}) => {
    return (
        <div className="col-md">
            <div className="card">
                <div className="card-body text-center">
                    <img src={img} alt="" height='200'/>
                </div>
            </div>
        </div>
    )
}

export default Item
