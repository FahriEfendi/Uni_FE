import { Container, Row, Col, Card, Button,Table } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";


const Dashboard =() =>{
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const navigate = useNavigate();
    const [value, onChange]  = useState(new Date());;

    useEffect(() =>{
      refreshToken();

    },[]);

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decode = jwt_decode(response.data.accessToken);
      setName(decode.name);
      setExpire(decode.exp);
    } catch (error) {
      if(error.response){
        navigate("/login");
      }
      
    }
  }
  
  return (
    <div  style={{backgroundColor:"#EEF1FF"}}>
      
        <TopBar/>
        <Sidebar/>
        <Container style={{margin:"50px",marginTop:"0"}}>
        <Container>
      <Row >
        <Col md={{ span: 12, offset: 1 }} style={{marginTop:"60px"}}><Card style={{backgroundColor:"#AAC4FF"}}>
      <Card.Body >
        <Card.Title >Upgrade Pro</Card.Title>
        <Card.Text >
        Silahkan upgrade agar kamu mendapatkan fitur baru dan mendapatkan akses secara penuh! <Button variant="primary">Upgrade Pro</Button>
        </Card.Text>
      </Card.Body>
    </Card></Col>
      
        <Col md={{ span: 4, offset: 1 }} ><Card style={{backgroundColor:"#AAC4FF",marginTop:"20px"}}>
      <Card.Body>
        <Card.Text style={{textAlign:"center"}}>
        Link Undangan Kamu <Button variant="primary" style={{width:"auto"}}>Salin</Button>
        </Card.Text>
      </Card.Body>
    </Card></Col>
        <Col md={{ span: 5, offset: 2 }}><Card style={{backgroundColor:"#AAC4FF",marginTop:"20px"}}>
      <Card.Body>
        <Card.Text>
        <Table striped bordered hover  style={{width:"100%",}}>
        <tbody>
      <tr>
          <td>Semua Tamu</td>
          <td>Tamu yang Hadir</td>
          <td>Tamu yang Selesai Hadir</td>
          </tr>
          <tr style={{textAlign:"center"}}>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          </tbody>
          </Table>
        </Card.Text>
      </Card.Body>
    </Card></Col>
      
        <Col md={{ span: 12, offset: 1 }}><Card style={{backgroundColor:"#AAC4FF",marginTop:"20px"}}>
      <Card.Body>
      <Card.Text style={{textAlign:"center", fontSize:"20px"}}>
      <Table striped bordered hover  style={{width:"100%",}}>
        <tbody>
      <tr>
          <td>Semua Undangan</td>
          <td>Hadir</td>
          <td>Tidak Hadir</td>
          <td>Pending</td>
          <td>Telah Hadir</td>
          </tr>
          <tr style={{textAlign:"center"}}>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          </tbody>
          </Table>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card></Col>


    
    <Col md={{ span: 12, offset: 1 }}>
    <Card style={{backgroundColor:"#AAC4FF",marginTop:"20px"}}>
      <Card style={{backgroundColor:"#AAC4FF",marginTop:"20px", marginLeft:"380px", marginRight:"380px", marginBottom:"20px"}}>
      <Card.Body>
      <Card.Text style={{textAlign:"center", fontSize:"20px"}}>
        <h1>Calender</h1>

        </Card.Text>
     
        <Card.Text>
        <Calendar onChange={onChange} value={value} />
        </Card.Text>
 
      </Card.Body>
      
    </Card></Card></Col>
      </Row>
      
        
        </Container>
        </Container>
    </div>
  );
}
export default Dashboard;
