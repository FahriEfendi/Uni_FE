import Sidebar from "../../components/Sidebar";
import {Card, Container, Row, Col, Form, Table, Button} from "react-bootstrap";
import TopBAr from '../../components/TopBar';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import React, { useState, useEffect } from 'react';
import tema from "../../Assets/tema.png";
import tema1 from "../../Assets/tema1.png";
import tema2 from "../../Assets/tema2.png";
import { Link } from "react-router-dom";


const BuatUndangan = () =>{

  const [name, setName] = useState('');
    const [token, setToken] = useState('');

    useEffect(() =>{
      refreshToken();
    },[]);

    const refreshToken = async () => {
      try {
        const response = await axios.get('http://localhost:5000/token');
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        console.log(decoded);
      } catch (error) {
        
      }
    }
    return (
      <section><TopBAr />
       <Sidebar />
       <Container >
       <Container style={{margin:"50px",marginTop:"0"}}>
        <Row 
        style={{ paddingTop:60,width:"auto"}}>
        <Container fluid className="home-section" >
        <h1>HALO, {name}</h1>
        <h1>SELAMAT DATANG DI </h1>
        <p style={{marginTop:30}}>Ceritakan Pernikahanmu Untuk Membuat Undangan</p>
        <Form>
            <h4 style={{textAlign:"left", paddingLeft:40}}>Judul</h4>
            <input style={{width:"90%", marginLeft:5, borderRadius:"10px", padding:"7px"}} type="text"></input>
            <h6 style={{textAlign:"left",paddingLeft:40}}>Tips:</h6>
            <br></br>
            <h4 style={{textAlign:"left", paddingLeft:40}}>Tanggal Pernikahan</h4>
            <input style={{width:"90%", marginLeft:5, borderRadius:"10px", padding:"7px"}} type="text"></input>
            <br></br>
<br></br>
        </Form>
</Container>

<Form>         
            <br></br>
<br></br>
        </Form>

        <Container fluid className="home-section">
        <h1>DATA PASANGAN</h1>
        <p style={{marginTop:30}}>Kamu sudah kenalkan dengan pasanganmu. Silahkan diisi agar para tamu jadi lebih kenal</p>
        <Form>
        
        <Row>

      <Col
              md={6}
              style={{ paddingBottom: 20, paddingTop: 50}}
>
                <h4 style={{textAlign:"left", width:"200%"}}>Calon Pengantin Pria</h4>
            <h6 style={{textAlign:"left", marginTop:20,}}>Nama *</h6>
            <input style={{width:"100%", marginLeft:-0, borderRadius:"10px"}} type="text"></input>
            <h6 style={{textAlign:"left", marginTop:30}}>Nama Orang Tua:</h6>
            <h6 style={{textAlign:"left", marginTop:10}}>Ibu</h6>
            <input style={{width:"100%", marginLeft:-0, borderRadius:"10px"}} type="text"></input>
            <h6 style={{textAlign:"left", marginTop:10}}>Ibu</h6>
            <input style={{width:"100%", marginLeft:-0, borderRadius:"10px"}} type="text"></input>
            <h6 style={{textAlign:"left", marginTop:10}}>Bio</h6>
            <input style={{width:"100%", marginLeft:-0, padding:"30px", borderRadius:"10px"}} type="text"></input>
            <h6 style={{textAlign:"left", marginTop:"10"}}>Media Sosial</h6>
            <input style={{width:"100%",  borderRadius:"10px",marginTop:"10px"}} type="text"></input>
            <input style={{width:"100%",  borderRadius:"10px",marginTop:"10px"}} type="text"></input>
            <input style={{width:"100%",  borderRadius:"10px",marginTop:"10px"}} type="text"></input>
            <p style={{textAlign:"left",paddingLeft:50, width:"150%", fontSize:10}}>Tips: Kosongkan jika tidak ada</p>
            <h6 style={{textAlign:"left", marginTop:10}}>Foto Pengantin Pria</h6>
            <input style={{width:"100%", marginLeft:-0, borderRadius:"10px"}} type="text"></input>
            <h6 style={{textAlign:"left", marginTop:10}}>Foto Prewedding</h6>
            <input style={{width:"100%", marginLeft:-0, borderRadius:"10px"}} type="text"></input>
                
              </Col>

      <Col md={6} style={{ paddingBottom: 20, paddingTop: 50,float:"right"}}>
                <h4 style={{textAlign:"left", width:"200%"}}>Calon Pengantin Wanita</h4>
            <h6 style={{textAlign:"left", marginTop:20}}>Nama *</h6>
            <input style={{width:"100%", marginLeft:-0, borderRadius:"10px"}} type="text"></input>
            <h6 style={{textAlign:"left", marginTop:30}}>Nama Orang Tua:</h6>
            <h6 style={{textAlign:"left", marginTop:10}}>Ibu</h6>
            <input style={{width:"100%", marginLeft:-0, borderRadius:"10px"}} type="text"></input>
            <h6 style={{textAlign:"left", marginTop:10}}>Ibu</h6>
            <input style={{width:"100%", marginLeft:-0, borderRadius:"10px"}} type="text"></input>
            <h6 style={{textAlign:"left", marginTop:10}}>Bio</h6>
            <input style={{width:"100%", marginLeft:-0, padding:"30px", borderRadius:"10px"}} type="text"></input>
            <h6 style={{textAlign:"left", marginTop:10}}>Media Sosial</h6>
            <input style={{width:"100%",marginTop:"10px", borderRadius:"10px"}} type="text"></input>
            <input style={{width:"100%",marginTop:"10px", borderRadius:"10px"}} type="text"></input>
            <input style={{width:"100%",marginTop:"10px", borderRadius:"10px"}} type="text"></input>
            <p style={{textAlign:"left",paddingLeft:50, width:"150%", fontSize:10}}>Tips: Kosongkan jika tidak ada</p>
            <h6 style={{textAlign:"left", marginTop:10}}>Foto Pengantin Wanita</h6>
            <input style={{width:"100%", marginLeft:-0, borderRadius:"10px"}} type="text"></input>
            <h6 style={{textAlign:"left", marginTop:10}}>Foto Prewedding</h6>
            <input style={{width:"100%", marginLeft:-0, borderRadius:"10px"}} type="text"></input>
              </Col>

</Row>
             
</Form>
<Form>
            <h2 style={{textAlign:"left"}}>Kata-kata Mutiara</h2>
            <input style={{width:"100%", marginLeft:0,  padding:"50px", borderRadius:10}} type="text"></input>
           <h1></h1>
           <h1></h1>
        </Form>
        </Container>  


        <Form>   
            <br></br>
<br></br>
        </Form>
        <Container fluid className="home-section">
        
        <h1>RANGKAIAN ACARA</h1>
        <p style={{marginTop:30}}>Informasi ini akan sangat membantu tamu. Silahkan diisi dengan lengkap</p>
        <Form>
        <h4 style={{textAlign:"left", paddingLeft:40}}>Akad Nikah</h4>
        <h6 style={{textAlign:"left", paddingLeft:40}}>Waktu</h6>
            <input style={{width:"90%", marginLeft:5, borderRadius:"10px", padding:"7px"}} type="text"></input>
          
            <h6 style={{textAlign:"left", paddingLeft:40}}>Zona Waktu</h6>
            <select style={{width:"90%", marginLeft:5, borderRadius:"10px", padding:"7px"}} type="text"></select>
            <h6 style={{textAlign:"left", paddingLeft:40}}>Lokasi</h6>
            <input style={{width:"90%", marginLeft:5, borderRadius:"10px", padding:"7px"}} type="text"></input>
            <h6 style={{textAlign:"left", paddingLeft:40}}>Alamat</h6>
            <input style={{width:"90%", marginLeft:5, borderRadius:"10px", padding:"7px"}} type="text"></input>
<br></br>
<br></br>
            <h4 style={{textAlign:"left", paddingLeft:40}}>Resepsi Nikah</h4>
        <h6 style={{textAlign:"left", paddingLeft:40}}>Waktu</h6>
            <input style={{width:"90%", marginLeft:5, borderRadius:"10px", padding:"7px"}} type="text"></input>
          
            <h6 style={{textAlign:"left", paddingLeft:40}}>Zona Waktu</h6>
            <select style={{width:"90%", marginLeft:5, borderRadius:"10px", padding:"7px"}} type="text"></select>
            <h6 style={{textAlign:"left", paddingLeft:40}}>Lokasi</h6>
            <input style={{width:"90%", marginLeft:5, borderRadius:"10px", padding:"7px"}} type="text"></input>
            <h6 style={{textAlign:"left", paddingLeft:40}}>Alamat</h6>
            <input style={{width:"90%", marginLeft:5, borderRadius:"10px", padding:"7px"}} type="text"></input>
            <br>
            </br>
            <br></br>
            <h6 style={{textAlign:"left", paddingLeft:40}}>Data Tamu</h6>
            <br></br>
            
            <Table striped bordered hover style={{width:"100%"}}>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nuap Inaraham</td>
          <td>Kenalan</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Farhan Kebab</td>
          <td>Keluarga</td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Soe Karnoto</td>
          <td>Kenalan</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
        </Form>
        
        <strong>
        <p style={{marginTop:"50px"}}>SILAHKAN PILIH TEMA PERNIKAHAN</p>
        </strong>
        <p>Berbagai tema sudah kami sediakan. Pilih tema pernikahan yang kamu inginkan</p>
        <Row >
        <h1 className="fitur" style={{textAlign:"left",fontSize:"25px"}}>Tema</h1>
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
                  <Button style={{marginBottom:"30px",marginTop:"30px",float:"right",backgroundColor:"#447294",borderRadius:"15px",width:"150px"}}>Preview</Button>
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
                 <Button style={{marginBottom:"30px",marginTop:"30px",float:"right",backgroundColor:"#447294",borderRadius:"15px",width:"150px"}}>Preview</Button>
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
                  <Button style={{marginBottom:"30px",marginTop:"30px",float:"right",backgroundColor:"#447294",borderRadius:"15px",width:"150px"}}>Preview</Button>
                  </Link>
                 </div>
                </Card>
                <h1>B&W Theme</h1>
          </Col>
          </Row>
          <Button style={{backgroundColor:"#447294",width:"500px",marginBottom:"50px"}}>Menyimpan</Button>
      </Container>
      

    </Row>
    </Container>
    </Container>
    </section>
    );
    
}

export default BuatUndangan;
