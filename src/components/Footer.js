import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light py-5 ">
      <Container>
        <Row>
          <Col md="6">
            <h4>About Me</h4>
            <p>Hi there, I'm Perteek Kapoor, a front-end developer based in Faridabad. I'm passionate about creating beautiful and user-friendly websites that provide a great user experience.</p>
          </Col>
          <Col md="3">
            <h4>Links</h4>
            <ul className="list-unstyled">
            <li class="nav-item"> <Link class="nav-link active"  aria-current="page" to="/">Home</Link></li>
            <li class="nav-item"> <Link class="nav-link active"  aria-current="page" to="/about">About</Link></li>
            <li class="nav-item"> <Link class="nav-link active"  aria-current="page" to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col md="3">
            <h4>Contact Me</h4>
            <ul className="list-unstyled">
              <li><i className="bi bi-envelope-fill me-2"></i>perteekkappor34.com</li>
              <li><i className="bi bi-telephone-fill me-2"></i>+91 9999990009</li>
              <li><i className="bi bi-geo-alt-fill me-2"></i>Faridabad, Haryana, 121001</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};



export default Footer
