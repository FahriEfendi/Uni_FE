import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import TopBAr from '../../components/TopBar';
import { Container,Row,Col,Button, Card, Table, Form} from 'react-bootstrap';
import {BsPlusCircle}  from "react-icons/bs";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const BukuTamu = () =>{
  const [token, setToken] = useState('');
  const [qrdata, setqrdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() =>{
    refreshToken();
    getqrdata();

  },[]);

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:5000/tokenqr');
      setToken(response.data.accessToken);
    } catch (error) {
      if(error.response){
        navigate("/login");
      }
      
    }
  }

  const getqrdata = async () => {
    const response = await axios.get('http://localhost:5000/qrcode', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
    setqrdata(response.data);
  }

    return (
        <div  style={{backgroundColor:"#EEF1FF"}}>
            <TopBAr/>
            <Sidebar />
            <Container style={{margin:"50px",marginTop:"0"}}>
            <Container>
            
            <Row>
        <Col md={{ span: 12, offset: 1}}><Card style={{backgroundColor:"#AAC4FF",marginTop:"60px"}}>
      <Card.Body >
        <Card.Title >Upgrade Pro</Card.Title>
        <Card.Text >
        Silahkan upgrade agar kamu mendapatkan fitur baru dan mendapatkan akses secara penuh! <Button variant="primary">Upgrade Pro</Button>
        </Card.Text>
      </Card.Body>
    </Card></Col>
      <Col md={{ span: 3, offset: 10 }}><Button variant="primary" style={{marginTop:"20px"}}><BsPlusCircle/>Tambah Tamu</Button></Col>
      
        <Col md={{ span: 12, offset: 1 }}><Card style={{backgroundColor:"#AAC4FF",height:"500px",marginTop:"20px"}}>
      <Card.Body>
      <Card.Text style={{textAlign:"center", fontSize:"20px"}}>
        <Form>
      <input placeholder='Cari Tamu' style={{width:"300px", borderRadius:"10px", margin:"7px",float:"left"}} type="text"></input>
      </Form>
      <Table striped bordered hover  style={{width:"100%",}}>
        <thead>
      <tr>
          <th>NO</th>
          <th>Link QR</th>
          <th>Status</th>
          <th>Waktu</th>
         
          </tr>
          </thead>
          <tbody>
            {qrdata.map((user, index) =>(
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.linkqr}</td>
                <td>{user.status}</td>
                <td>{user.createdAt}</td>
              </tr>
            ))}
            <tr>

            </tr>
          </tbody>
          </Table>
          <Button onClick={getqrdata}>Buka Data Tamu</Button>
        </Card.Text>
      </Card.Body>
    </Card></Col>
        
      </Row>
            
            </Container>
            </Container>
        </div>
      );
    }

export default BukuTamu;