import React from 'react';
import {Row,Col,Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const BW = () =>{
    return (
      <section>
      <strong>
      <Row>
      <Card.Img src={require('../../image/BW1.png')} style={{backgroundSize: "cover",width:"100%"}} />
      <Card.ImgOverlay>
      <Col sm={5} style={{float:"left",height:"auto"}}>
        <Card.Text style={{textAlign:"center",fontSize:"3vw",color:"#000"}}> Dear, Fahri Efendi </Card.Text>
        <Card.Text style={{textAlign:"center",fontSize:"2vw",color:"#000"}}>You are Invite !</Card.Text>
        <Card.Text style={{textAlign:"center",fontSize:"2vw",color:"#000"}}>The Wedding of</Card.Text>
              <link href="https://fonts.googleapis.com/css?family=Corinthia" rel="stylesheet"></link>
        <Card.Text style={{fontFamily:"Corinthia",fontSize:"7vw",color:"#000",textAlign:"center"}}>Alfi & Yunita</Card.Text>
        <Card.Text style={{textAlign:"center",fontSize:"2vw",color:"#000"}}>22 Desember 2022</Card.Text>
        
        <Link to="/BW2">
            <Button style={{borderColor:"#000",backgroundColor:"#000",color:"#fff",width:"auto"}}>Buka Undangan</Button>
            </Link>
        </Col>
        
      </Card.ImgOverlay>
      
                
              </Row>
            
    </strong>
            </section>
            
      );
    }

export default BW;