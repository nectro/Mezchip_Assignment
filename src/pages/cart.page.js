import React from 'react'
import Helmet from 'react-helmet'

import CartComponent from '../components/cartComponent/cart.component'

function CartPage() {
    return (
        <div>
            <Helmet>
                <title>Guarented | Cart</title>
            </Helmet>
            <CartComponent />
        </div>
    )
}

export default CartPage
