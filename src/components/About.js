import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Circle from '../components/circle.js/Circle';
import me from "../Images/me.png"
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="d-flex align-items-center justify-content-center vh-100">
        <Container>
          <Row justify-content-center>
            <Col className="d-flex align-items-center justify-content-center">
              <Circle src={me}/>
            </Col>
              <br/>
              <br/>
              <hr style={{width:"100%",height:"30px",marginTop:"88px",color:"red",backgroundColor:"darkred"}}/>
          </Row>
          <Col className="d-flex align-items-center justify-content-center">
              <h1 style={{color:'red'}}>Creative Portfolio</h1>
              <br/>
              <br/>
            </Col>
              <p style={{textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

              <Col className="d-flex align-items-center justify-content-center">
                    <Link  to="/"><h3 style={{textDecoration:'underline'}}>Read more</h3></Link>
            </Col>
        </Container>
      </div>
    </div>
  )
}

export default About;
