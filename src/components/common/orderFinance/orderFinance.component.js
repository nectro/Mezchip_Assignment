import React,{ useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import Gift from '../../../assets/giftIcon.png'
import modalGift from '../../../assets/modalImg.png'
import social1 from '../../../assets/mail.png'
import social2 from '../../../assets/whatsapp.png'
import social3 from '../../../assets/facebook.png'
import social4 from '../../../assets/twitter.png'
import social5 from '../../../assets/linkedin.png'


function OrderFinanceComponent() {
    const [modal, setModal] = useState(false)

    const openModal = ()=>{
        setModal(true);
    }
    const closeModal = ()=>{
        setModal(false);
    }

    return (
        <div>
            <Modal show={modal} onHide={closeModal} centered>
                <Modal.Header closeButton className="pb-0 border-0"/>
                <Modal.Body className="py-0 px-5 d-flex flex-column justify-content-start align-items-center text-center">
                    <img src={modalGift} style={{width:220}} alt="modalIcon"/>
                    <p style={{fontFamily:"quicksand"}} className="fs-5 mx-3 py-3 fw-bold text-dark">You and Your friend get 30% <br/>off upto 500 on your next months rent</p>
                    <p className="text-grey py-1">Your Promo code</p>
                    <p className="text-btnPrimary fs-3 py-1 pb-2">ANDNYD2S</p>
                </Modal.Body>
                <Modal.Footer className="pt-0 pb-4 mx-5 border-0 d-flex flex-column justify-content-start align-items-center text-center">
                    <p className="fs-5 py-3 w-50 text-grey border-top-dashed">Share on</p>
                    <Container>
                        <Row className="gap-2 mx-2">
                            <Col className="rounded p-0 bg-faintgrey d-flex flex-column justify-content-center align-items-center" style={{height:50}}><img src={social1} style={{height:25}} alt="mail"/></Col>
                            <Col className="rounded p-0 bg-faintgrey d-flex flex-column justify-content-center align-items-center" style={{height:50}}><img src={social2} style={{height:25}} alt="whatsapp"/></Col>
                            <Col className="rounded p-0 bg-faintgrey d-flex flex-column justify-content-center align-items-center" style={{height:50}}><img src={social3} style={{height:25}} alt="facebook"/></Col>
                            <Col className="rounded p-0 bg-faintgrey d-flex flex-column justify-content-center align-items-center" style={{height:50}}><img src={social4} style={{height:25}} alt="twitter"/></Col>
                            <Col className="rounded p-0 bg-faintgrey d-flex flex-column justify-content-center align-items-center" style={{height:50}}><img src={social5} style={{height:25}} alt="linedin"/></Col>
                        </Row>
                    </Container>
                </Modal.Footer>
            </Modal>
            <Container fluid className="bg-white customShadow rounded px-5 py-5 d-flex flex-column justify-content-start align-items-center gap-4" style={{height:"fit-content", position:"sticky", top:"20px"}}>
                <Container fluid className="py-3 bg-faintBg d-flex justify-content-center align-items-center">
                    <img src={Gift} style={{height:26}} alt="giftIcon"/>
                    <p className="text-orange">Have a promo code?</p>
                </Container>
                <Container fluid>
                    <Row className="py-2">
                        <Col className="p-0 text-grey">Monthly Rent</Col>
                        <Col className="p-0 text-end">Rs 3050</Col>
                    </Row>
                    <Row className="py-2">
                        <Col className="p-0 text-grey">Security Deposit</Col>
                        <Col className="p-0 text-end">Rs 6799</Col>
                    </Row>
                    <Row className="py-2">
                        <Col className="p-0 text-grey">GST</Col>
                        <Col className="p-0 text-end">Rs 300</Col>
                    </Row>
                    <Row className="py-2">
                        <Col className="p-0 text-grey">Coupon Discount</Col>
                        <Col className="p-0 text-end text-lightRed">-Rs 2789</Col>
                    </Row>
                    <Row className="py-2">
                        <Col className="p-0 text-grey">Delivery</Col>
                        <Col className="p-0 text-end text-lightGreen">FREE</Col>
                    </Row>
                    <Row className="py-3 mt-2 border-top-dashed">
                        <Col className="p-0">Total Payable</Col>
                        <Col className="p-0 text-end">Rs 30,000</Col>
                    </Row>
                </Container>
                <Container fluid className="p-0">
                    <Button style={{fontFamily:"quicksand"}} variant="btnPrimary" size="lg" className="py-3 w-100 text-white" onClick={()=>openModal()}>
                        PLACE ORDER
                    </Button>
                </Container>
            </Container>
        </div>
    )
}

export default OrderFinanceComponent
