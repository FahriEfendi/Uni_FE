import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";


function Home3() {
  return (
    <Container fluid className="home3" id="home">
      <Container>
        <Row>
         <Col
                sm={5}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                
                <h1 style={{fontSize:"20px",textAlign:"left",backgroundColor:"#447294",textTransform:"uppercase"}}>UNIVITATION SUDAH BANYAK DIPERCAYA</h1>
                <p style={{textAlign:"left"}}>Kami memiliki tujuan untuk membantu memudahkan orang-orang dalam membuat undangan online dan juga menjaga alam untuk mengurangi penggunaan kertas</p>
                
            </Col>
            <Col
                sm={5}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                
                <h1 style={{fontSize:"34px",float:"right"}}>
                  <table>
                    <tr>
                      <td>| 800+</td>
                      <td>|60.000+</td>
                      <td>|100+</td>
                    </tr>
                    <tr style={{fontSize:"15px"}}>
                      <td>Dibuat</td>
                      <td>Undangan disebar</td>
                      <td>Online</td>
                    </tr>
                  </table>
                  
                     </h1>

                
            </Col>
            
        </Row>
      </Container>
    </Container>
  );
}
export default Home3;