import React from 'react'
import { Container } from 'react-bootstrap'
import classes from './cart.module.css'
import HeaderComponent from '../common/headerComponent/header.component'
import ProgressComponent from '../common/progressComponent/progress.component'
import OrderSummaryComponent from '../common/orderSummary/orderSummary.component'
import OrderFinanceComponent from '../common/orderFinance/orderFinance.component'
import ServicesComponent from '../common/servicesComponent/services.component'

function CartComponent() {
    return (
        <div>
            <HeaderComponent />
            <Container breakpoint="xl">
                <ProgressComponent />
                <div className={`${classes.cartInfo} gap-4`}>
                    <div>
                        <OrderSummaryComponent />
                    </div>
                    <div>
                        <OrderFinanceComponent />
                    </div>
                </div>
                <ServicesComponent />
            </Container>
        </div>
    )
}

export default CartComponent
