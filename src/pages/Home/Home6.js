import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

function Home6() {
  return (
    <Container fluid className="home-akhir" id="home">
       <Container className="home-content-akhir">
          <Row className="justify-content-center">
                <h1 className="heading-name-akhir">
                  <strong className="main-name">Mulai Buat Undangan Onlinemu!!</strong>
                </h1>
                <br></br>
                <Button style={{marginBottom:"30px",marginTop:"30px",width:"150px",backgroundColor:"#447294",borderRadius:"20px"}}>Coba Sekarang !</Button>
            </Row>
          </Container>
        </Container>
  );
}

export default Home6;
