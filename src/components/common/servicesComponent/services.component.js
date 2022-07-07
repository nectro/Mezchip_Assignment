import React from 'react'
import { Container, Card } from 'react-bootstrap'
import Img1 from '../../../assets/service1.png'
import Img2 from '../../../assets/service2.png'
import Img3 from '../../../assets/service3.png'

function ServicesComponent() {
    return (
        <Container fluid className="py-5 px-0 d-flex flex-row justify-content-between align-items-between gap-4">
            <Card className="text-center px-4 py-4" style={{width:"32%", borderRadius:10}}>
                <Card.Body>
                    <Card.Title><img src={Img1} style={{height:60}} alt="affordable"/></Card.Title>
                    <Card.Title style={{fontFamily:"quicksand"}} className="fs-4 text-grey">MOST AFFORDABLE</Card.Title>
                    <Card.Text className="text-lightGrey">
                        Find the best exclusives range of products
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="text-center px-4 py-4" style={{width:"32%", borderRadius:10}}>
                <Card.Body>
                    <Card.Title><img src={Img2} style={{height:60}} alt="free service"/></Card.Title>
                    <Card.Title style={{fontFamily:"quicksand"}} className="fs-4 text-grey">FREE SERVICE</Card.Title>
                    <Card.Text className="text-lightGrey">
                        Find the best exclusives range of products
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="text-center px-4 py-4" style={{width:"32%", borderRadius:10}}>
                <Card.Body>
                    <Card.Title><img src={Img3} style={{height:60}} alt="free delivery"/></Card.Title>
                    <Card.Title style={{fontFamily:"quicksand"}} className="fs-4 text-grey">FREE DELIVERY</Card.Title>
                    <Card.Text className="text-lightGrey">
                        Find the best exclusives range of products
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ServicesComponent
