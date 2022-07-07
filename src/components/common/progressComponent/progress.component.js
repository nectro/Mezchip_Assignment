import React from 'react'

function ProgressComponent() {
    return (
        <div className="d-flex justify-content-center align-items-center gap-2" style={{height:120}}>
            <p className="text-btnPrimary border-bottom border-2 border-btnPrimary">CART</p>
            <span className="bg-lightGrey" style={{height:1.5, width:30}}></span>
            <p className="text-lightGrey">DELIVERY</p>
            <span className="bg-lightGrey" style={{height:1.5, width:30}}></span>
            <p className="text-lightGrey">PAYMENT</p>
        </div>
    )
}

export default ProgressComponent
