import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import tema from "../../Assets/tema.png";
import tema1 from "../../Assets/tema1.png";
import tema2 from "../../Assets/tema2.png";
import { Link } from "react-router-dom";


function Home5() {
  return (
    <Container fluid className="home5" id="home">
      <Container >
        <Row >
        <h1 className="fitur" style={{textAlign:"left",textTransform:"uppercase",fontWeight:"bold",letterSpacing:"0px",color:'#546D9D',borderBottom:"2px solid"}}>Tema</h1>
          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card className="card-tema" style={{borderRadius:"15px"}}>
                  <Card.Img src={tema} alt="img">
                    
                  </Card.Img>
                 <div>
                 <Link to="/Vin">
                  <Button style={{marginBottom:"30px",marginTop:"30px",float:"right",backgroundColor:"#447294",borderColor:"#447294",borderRadius:"20px"}}>Preview</Button>
                 </Link>
                 </div>
                </Card>
                <h1>Vintage</h1>
                
          </Col>
          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  style={{borderRadius:"15px"}}>
                  <Card.Img src={tema1} alt="img">
                    
                  </Card.Img>
                 <div>
                 <Link to="/Sakura">
                 <Button style={{marginBottom:"30px",marginTop:"30px",float:"right",backgroundColor:"#447294",borderColor:"#447294",borderRadius:"20px"}}>Preview</Button>
                  </Link>
                 </div>
                </Card>
                <h1>Sakura</h1>
          </Col>

          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  style={{borderRadius:"15px"}}>
                  <Card.Img src={tema2} alt="img">
                    
                  </Card.Img>
                 <div>
                 <Link to="/BW">
                  <Button style={{marginBottom:"30px",marginTop:"30px",float:"right",backgroundColor:"#447294",borderColor:"#447294",borderRadius:"20px"}}>Preview</Button>
                  </Link>
                 </div>
                </Card>
                <h1>B&W Theme</h1>
          </Col>
          <h1 className="fitur" style={{textAlign:"left",textTransform:"uppercase",fontWeight:"bold",letterSpacing:"0px",color:'#546D9D',borderBottom:"2px solid",marginTop:"70px"}}>TESTIMONI</h1>
        
          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card className="card-tema" style={{borderRadius:"15px",backgroundColor:"#EEF1FF",borderColor:"#546D9D"}}>
                  <Card.Img src={require('../../image/testi1.png')} style={{width:"100px",display: "block",marginLeft: "auto",marginRight: "auto"}}>
                  </Card.Img>
                    Sarah Viloid
                  
                  <Card style={{backgroundColor:"#D2DAFF",margin:"20px",color:"black"}}>
                  <Card.Text>your invitation card design is very elegant! Everyone is satisfied with the design. Overall we all love it!</Card.Text>
                  <img src={require('../../image/bintang4.png')} style={{width:"100px"}}/>
                  </Card>
                </Card>
                
          </Col>
          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card className="card-tema" style={{borderRadius:"15px",backgroundColor:"#EEF1FF",borderColor:"#546D9D"}}>
                  <Card.Img src={require('../../image/testi1.png')} style={{width:"100px",display: "block",marginLeft: "auto",marginRight: "auto"}}>
                  </Card.Img>
                  Evellin 
                  
                  <Card style={{backgroundColor:"#D2DAFF",margin:"20px"}}>
                  <Card.Text>untuk harga yg dibayarkan, fitur dan kemudahan semua sangat memuaskan, bahkan benar2 jauh di atas ekspetasi. syukur banget kemarin cari di google sampai halaman 4 atau 5 gitu dan ketemu Unik. dan ga nyesel. keluarga juga suka banget sama tampilan, UI/UX nya juga bagus banget</Card.Text>
                  <img src={require('../../image/bintang4.png')} style={{width:"100px"}}/>
                  </Card>
                </Card>
          </Col>

          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card className="card-tema" style={{borderRadius:"15px",backgroundColor:"#EEF1FF",borderColor:"#546D9D"}}>
                  <Card.Img src={require('../../image/testi1.png')} style={{width:"100px",display: "block",marginLeft: "auto",marginRight: "auto"}}>
                  </Card.Img>
                    Rosse
                  
                  <Card style={{backgroundColor:"#D2DAFF",margin:"20px"}}>
                  <Card.Text>This website so good, I really love this invitation. You guys who want make card wedding beautiful just use this website</Card.Text>
                  <img src={require('../../image/bintang4.png')} style={{width:"100px"}}/>
                  </Card>
                </Card>
          </Col>
          
          
        </Row>
      </Container>
    </Container>

  );
}
export default Home5;
