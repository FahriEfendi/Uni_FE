import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Home6 from "./Home6";
import Layout from "../../components/Layout";

function Home() {
  return (
    <section>
      <Layout title="UNI Vitation | Website Undangan Pernikahan" showFooter showNavbar>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              

              <Col
                md={5}
                style={{ paddingBottom: 20, paddingLeft: 100, paddingTop: 50 }}
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>

              <Col md={7} className="home-header">
                
                <h1 className="heading-name" style={{color:"black"}}>
                  <strong className="main-name"> Welcome!!</strong>
                </h1>
                <br></br>

                <h1 className="heading-website" style={{color:"black"}}>
                Buat undangan online mu dengan uni vitation, undang temanmu dengan mudah.
                </h1>
                <br></br>
                <br></br>

                <button
                  style={{
                    color: "white",
                    marginLeft: "50px",
                    backgroundColor: "#5E6BAD",
                    borderRadius: "15px",
                  }}
                >
                  Coba Sekarang !
                </button>
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
       <Home3 />
       <Home4 />
       <Home5 />
       <Home6 />
      </Layout>
    </section>
  );
}

export default Home;
