import React,{ useState } from "react";
import { Container, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import homeLogo from "../../Assets/gambarlogin.png";
import {FcGoogle}from "react-icons/fc";

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const SignUp = async(e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users',{
        name: name,
        email: email,
        password: password
      });
     navigate("/login");
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
      
    }

  }

  return (
    <Layout title="UNI Vitation | SignUp">
    <Container fluid className="home-about-section" id="about">
      <Container>
      <div className="warp d-md-flex" style={{}}>
     
      <Col
                sm={5}
              >

                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ height:"700px"}}
                />
              </Col>
       
              <div class="login-form" >
                   <form onSubmit={ SignUp }>
                     <h1>SignUp</h1>
                     <p className="has-text-centered">{msg}</p>
                       <div class="content">
                        <div class="col-md-15 mb-3">
                           <label
                            style={{ textAlign: "justify" }}
                >
                  <input
                    type="text"
                    class="form"
                    placeholder="Nama"
                    value={name} onChange={(e)=> setName(e.target.value)}
                    required
                  ></input>
                  <div class="valid-feedback">Look</div>
                </label>
              </div>
              <div class="col-md-15 mb-3">
                           <label
                            style={{ textAlign: "justify" }}
                 
                >
                  <input
                    type="text"
                    class="form"
                    placeholder="Email"
                    value={email} onChange={(e)=> setEmail(e.target.value)}
                    required
                  ></input>
                  <div class="valid-feedback">Look</div>
                </label>
              </div>
              <div class="col-md-15 mb-3">
                <label style={{ textAlign: "left" }} for="validationCustom01">
                  
                  <input
                    type="password"
                    class="form"
                    id="validationCustom01"
                    placeholder="Password"
                    value={password} onChange={(e)=> setPassword(e.target.value)}
                    required
                  ></input>
                  <div class="valid-feedback">Look</div>
                </label>
              </div>
              <div class="action">
              <button class="btn btn-secondary">
                SignUp
              </button>
              
            </div>
            <div class="google">
              <button>
              <FcGoogle/>
                <a style={{marginLeft:"20px"}} href="/">
                </a>
                Login with Google
                
              </button>
            </div>
            </div>
            <div>
              <p>
                Sudah Memiliki Akun ? <a href="/Login"> Login</a>.
              </p>
            </div>
           </form>
           </div>
          </div>
      </Container>
    </Container>
    </Layout>
  );
}
export default SignUp;
