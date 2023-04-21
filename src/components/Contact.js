import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactForm from './Contactform';

const Contact = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
        <h1 className='text-center' style={{marginTop:"100px",color:"lightgrey"}}>Contact Me</h1>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <Container>
          <Row>
            <Col className="text-center" >
<ContactForm/>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

