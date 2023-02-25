import React from 'react';
import {Row,Col,Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Sakura = () =>{
    return (    
      <section>        
      <strong>
      <Row>       
      <Card.Img src={require('../../image/sakura1.png')} style={{backgroundSize: "cover",width:"100%"}} />
      <Card.ImgOverlay>
      <Col sm={6} style={{float:"right",height:"auto"}}>
        <Card.Text style={{textAlign:"center",fontSize:"3vw",color:"#F971C2"}}> Dear, Fahri Efendi </Card.Text>
        <Card.Text style={{textAlign:"center",fontSize:"2vw",color:"#F971C2"}}>You are Invite !</Card.Text>
        <Card.Text style={{textAlign:"center",fontSize:"2vw",color:"#F971C2"}}>The Wedding of</Card.Text>
              <link href="https://fonts.googleapis.com/css?family=Corinthia" rel="stylesheet"></link>
        <Card.Text style={{fontFamily:"Corinthia",fontSize:"7vw",color:"#F144AC",textAlign:"center"}}>Alfi & Yunita</Card.Text>
        <Card.Text style={{textAlign:"center",fontSize:"2vw",color:"#F971C2"}}>22 Desember 2022</Card.Text>
        
        <Link to="/Sakura2">
            <Button style={{borderColor:"#F971C2",backgroundColor:"#F971C2",color:"#fff",width:"auto"}}>Buka Undangan</Button>
            </Link>
        </Col>
        
      </Card.ImgOverlay>
      
                
              </Row>
            
    </strong>
            </section>
      );
    }

export default Sakura;