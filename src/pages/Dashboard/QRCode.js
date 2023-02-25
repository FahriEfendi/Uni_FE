import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import TopBAr from '../../components/TopBar';
import { Card,Col,Row,Button } from 'react-bootstrap';
import Sidebar from '../../components/Sidebar';
import QrReader from 'react-web-qr-reader';
import axios from "axios";


function QRCode (){
  let [qrdata, setQrdata] = useState('');
  const [hadir] = useState('Hadir');
  const [result, setResult] = useState('');
  const [setMsg] = useState('');
  const handleScan = (result) => {
      if (result) {
          setResult(result)
      }
  };
  const handleError = err => {
  alert("error")
  }
  const data= (JSON.stringify(result));
  const hasil =JSON.parse(data);

  qrdata =(hasil.data);

  const Postdb = async(e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/qrcode',{
        linkqr: qrdata,
        status: hadir
      
      });

    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
      
    }

  }

    return (
        <div  style={{backgroundColor:"#EEF1FF"}}>
            <TopBAr/>
            <Sidebar/>
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
        <Col md={{ span: 12, offset: 1 }}>
        <Card Card style={{backgroundColor:"#AAC4FF",height:"500px",marginTop:"20px"}}>
        <form onSubmit={ Postdb }>
           <div>
            <span
            style={{fontSize:20}}
            >QR Scanner</span>
            <center>
            <div style={{marginTop:30}}>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 30, width: 320}}
                />
            </div>
            </center>
                  <input
                    type="text"
                    class="form"
                    style={{fontsize:18, width:320, hight:100, marginTop:300}}
                    
                    value={qrdata} onChange={(e)=> setQrdata(e.target.value)}
                    required
                  ></input>
                  <div class="action">
              <button class="btn btn-secondary">
                Masuk
              </button>
            </div>
      </div>
      </form>
        </Card>
        </Col>  
    </Row> 
      </Container>
      </Container>
        </div>
      );
    }


export default QRCode;