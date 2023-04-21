import React from 'react'
// import {Link} from "react-router-dom"
import { Container ,Row,Col} from 'react-bootstrap';
import LinkedInPhoto from './Linkedin';
import Github from './Github';
import Circle from './circle.js/Circle';
import me from "../Images/me.png"
// import '../components/circle.js/Circle'; // Import CSS file for styling
import Allskill from './skills/Allskill';
const Home = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <Container>
          <Row>
            <Col className="text-center" style={{ marginLeft: "13vw" }}>
              <h1 style={{ fontWeight: 'bold', textAlign: 'left' }}>Front-End React <br /> Developer 👋</h1>
              <p style={{ textAlign: "left" }}>Hi, I'm Perteek Kapoor. A passionate Front-End React Developer based in Faridabad, Haryana. 📍<br /><br />
              <div style={{ display: 'flex' }}>
              <LinkedInPhoto url="https://www.linkedin.com/in/perteek-kapoor-76980920b/" alt="Perteek Kapoor's LinkedIn Profile" />
              <Github url="https://github.com/Perteek" alt="Perteek Kapoor's GitHub Profile" />
            </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center',marginTop:"-28vh", marginRight:"136px"}} id='circle'>
                  <Circle src={me} />
                </div>
                <div className='my-7' style={{marginTop:"115px",marginLeft:"100px"}}>
                <Allskill/>
                </div>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
  
}

export default Home
