import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from '../../../assets/img1.jpeg'

function OrderSummaryComponent() {
    return (
        <div>
            <Container fluid className="bg-white customShadow rounded p-3 gap-2">
                <Container>
                    <Row style={{maxHeight:160}} className="my-4">
                        <Col className="p-2"><img src={Image} className={`w-100 rounded-3`} alt="cartItemImage"/></Col>
                        <Col xs={3} className="p-2 ms-2 d-flex flex-column justify-content-between align-items-start">
                            <div>
                                <p>Royal Double Bed</p>                        
                                <p className="text-grey mt-1">$45.00</p>                        
                            </div>
                            <div>
                                <div className={`text-grey rounded-pill border border-1 d-flex justify-content-evenly align-items-center`} style={{width:80, height:26}}>
                                    <p>-</p>
                                    <p>1</p>
                                    <p>+</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-2 d-flex flex-column justify-content-start align-items-start">
                            <div>
                                <p className="text-grey">Tenure</p>                        
                                <p className="mt-1">12 Months</p>                        
                            </div>
                        </Col>
                        <Col className="p-2 d-flex flex-column justify-content-start align-items-start">
                            <div>
                                <p className="text-grey">Deposit</p>                        
                                <p className="mt-1">Rs 799</p>                      
                                <p className="small text-green">Fully Refundable</p>
                            </div>
                        </Col>
                        <Col className="p-2 d-flex flex-column justify-content-start align-items-start">
                        <div>
                                <p className="text-grey">Total</p>                        
                                <p className="mt-1 fs-5">Rs 1499</p>                      
                            </div>
                        </Col>
                    </Row>
                    <Row style={{maxHeight:160}} className="my-4">
                        <Col className="p-2"><img src={Image} className={`w-100 rounded-3`} alt="cartItemImage"/></Col>
                        <Col xs={3} className="p-2 ms-2 d-flex flex-column justify-content-between align-items-start">
                            <div>
                                <p>Royal Double Bed</p>                        
                                <p className="text-grey mt-1">$45.00</p>                        
                            </div>
                            <div>
                                <div className={`text-grey rounded-pill border border-1 d-flex justify-content-evenly align-items-center`} style={{width:80, height:26}}>
                                    <p>-</p>
                                    <p>1</p>
                                    <p>+</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-2 d-flex flex-column justify-content-start align-items-start">
                            <div>
                                <p className="text-grey">Tenure</p>                        
                                <p className="mt-1">12 Months</p>                        
                            </div>
                        </Col>
                        <Col className="p-2 d-flex flex-column justify-content-start align-items-start">
                            <div>
                                <p className="text-grey">Deposit</p>                        
                                <p className="mt-1">Rs 799</p>                      
                                <p className="small text-green">Fully Refundable</p>
                            </div>
                        </Col>
                        <Col className="p-2 d-flex flex-column justify-content-start align-items-start">
                        <div>
                                <p className="text-grey">Total</p>                        
                                <p className="mt-1 fs-5">Rs 1499</p>                      
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="d-flex py-4 justify-content-between align-items-center">
                    <Button style={{fontFamily:"quicksand"}} variant="outline-btnPrimary" className="px-5 py-3" size="lg">
                        CONTINUE SHOPPING
                    </Button>
                    <p className="fs-5 fw-light">
                        Need Help?
                    </p>
                </Container>
            </Container>
        </div>
    )
}

export default OrderSummaryComponent
