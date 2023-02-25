import React from 'react';
import { Container,Row,Col,Button, Card, Table, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import CountdownTimer from "./CountdownTimer.js";
const Vin = () =>{
    return (
            <section>
      <strong>
      <Row>  
      <Card.Img src={require('../../image/vin1.png')} style={{backgroundSize: "cover",width:"100%"}} />
      <Card.ImgOverlay>
      <Col sm={6} style={{float:"left",height:"auto"}}>
        <Card.Text style={{textAlign:"center",fontSize:"3vw"}}> Dear, Fahri Efendi </Card.Text>
        <Card.Text style={{textAlign:"center",fontSize:"2vw"}}>You are Invite !</Card.Text>
        <Card.Text style={{textAlign:"center",fontSize:"2vw"}}>The Wedding of</Card.Text>
              <link href="https://fonts.googleapis.com/css?family=Corinthia" rel="stylesheet"></link>
        <Card.Text style={{fontFamily:"Corinthia",fontSize:"10vw",color:"#816C4D",textAlign:"center"}}>Alfi & Yunita</Card.Text>
        <Card.Text style={{textAlign:"center",fontSize:"2vw"}}>22 Desember 2022</Card.Text>
        
        <Link to="/Vin2">
            <Button style={{borderColor:"#000",backgroundColor:"#8D7147",color:"#fff",width:"auto"}}>Buka Undangan</Button>
            </Link>
        </Col>
      </Card.ImgOverlay>
              </Row>
            
    </strong>
            </section>
            
      );
    }

export default Vin;