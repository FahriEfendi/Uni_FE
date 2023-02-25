import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import homeLogo from "../../Assets/barcode.svg";
import rsvp from "../../Assets/rsvp.svg";
import wallet from "../../Assets/wallet.svg";
import tamu from "../../Assets/tamu.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="fitur">
      <Container>
        <Row>
          <h1 className="fitur" style={{textAlign:"left",textTransform:"uppercase",fontWeight:"bold",letterSpacing:"0px",color:'#546D9D',borderBottom:"2px solid"}}>Fitur Kami</h1>
        <Col
                sm={3}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
                <h1 style={{fontSize:"25px"}}>Barcode Kehadiran</h1>
                <span>Kamu dapat menggunakan scan QR untuk tamu yang hadir, sehingga tamu kamu tidak perlu menulis di buku tamu lagi.</span>
                
              </Col>
              <Col
                sm={3}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <img
                  src={rsvp}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
                <h1 style={{fontSize:"25px"}}>RSVP</h1>
                <span>Tamu dapat konfirmasi kehadiran agar memudahkan pendataan kamu.</span>
                
              </Col>
              <Col
                sm={3}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <img
                  src={tamu}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
                <h1 style={{fontSize:"25px"}}>Buku Tamu</h1>
                <span>Kamu mendapatkan data kehadiran tamu secara automatis.
</span>
                
              </Col>
              <Col
                sm={3}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <img
                  src={wallet}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
                <h1 style={{fontSize:"25px"}}>Angpao cashless</h1>
                <span>Kamu dapat menerima hadiah dari orang terkasih meskipun mereka tidak hadir secara langsung.</span>
                
              </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
