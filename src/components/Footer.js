import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  
} from "react-icons/ai";
import { FaTiktok,FaQuestionCircle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3 style={{textAlign:"left"}}><strong>Tentang Univitation</strong></h3>
          <p style={{textAlign:"left",color:"white",fontFamily:"sans-serif",fontSize:"12px"}}>Univitation hadir memberikan jasa pembuatan undangan digital untuk mempermudah calon mempelai dalam menyebarkan kabar bahagia kepada teman, kerabat dan sanak keluarga dengan beragam fitur dan desain yang akan menambah semarak pernikahanmu </p>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3 style={{textAlign:"left",marginLeft:"185px"}}><strong>Lebih Dekat Dengan Kami</strong></h3>
          
          <Col md="6" className="footer-body" style={{marginLeft:"155px"}}>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="."
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="."
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsFacebook/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="."
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="."
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTiktok/>
              </a>
            </li>
          </ul>
        </Col>

          <p style={{textAlign:"left",color:"white",fontFamily:"sans-serif",fontSize:"12px",marginLeft:"185px",marginTop:"15px"}}>Phone: +6281234566989</p>
          <p style={{textAlign:"left",color:"white",fontFamily:"sans-serif",fontSize:"12px",marginLeft:"185px"}}>Emai: Univitation@gmail.com</p>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3 style={{textAlign:"left",marginLeft:"185px"}}><strong>Informasi</strong></h3>
        <p style={{textAlign:"left",color:"white",fontFamily:"sans-serif",fontSize:"12px",marginLeft:"185px",}}>FAQ <FaQuestionCircle/></p>
        <p style={{textAlign:"left",color:"#FFCF52",fontFamily:"sans-serif",fontSize:"12px",marginLeft:"185px",}}>Join as Mitra Univitation</p>
        </Col>
      </Row>
      <p style={{marginTop:"50px",color:"white"}}><strong >Copyright - 2022 Uni Vitation</strong></p>
    </Container>
  );
}

export default Footer;
