import React from "react";
import img2 from '../images/i15.jpg';
import {Form, Col, Row, Button} from 'react-bootstrap';


function Contact(){
    return(
        <div className="contact-container">
            <div className="right-container">
                <img className="contact-image" src = {img2} alt=""></img>
                <h1 className="right-heading">TO-DO APPLICATION</h1>
                <hr className="ct-line"></hr>
                <h1 className="contact-address">Dhulikhel, Kavre</h1>
                <h1 className="number">1508 10th Ave.</h1>
                <h1 className="contact-number">+977-9862541368</h1>
                <h1 className="contact-email">todoapp@todo.np</h1>
                <h1 className="right-foot">Feel free to contact us.</h1>
            </div>
            <div className="left-container">
                <h1 className="form-heading">Send Us A Message</h1>
            <div className="form-container">    
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>FIRST NAME</Form.Label>
                            <Form.Control placeholder="First name" /> 
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>LAST NAME</Form.Label>
                            <Form.Control placeholder="Last name" /> 
                        </Form.Group>
                        <Form.Group className="email" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="example@email.com" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label className="ph-number">PHONE NUMBER</Form.Label>
                            <Form.Control placeholder="Eg: +977 0000000000" />
                        </Form.Group>

                        <Form.Group className="mb-3 " className="message-box" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>MESSAGE</Form.Label>
                            <Form.Control as="textarea" placeholder="Write your message here..." rows={3} />
                        </Form.Group>
                        
                    </Row>
                    <div className="contact-button">
                    <Button className="contact-send" variant="success" >SEND </Button>
                    </div>
                    
                </Form>
            </div>
            </div>
        </div>
    )
}

export default Contact