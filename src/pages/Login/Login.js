import React,{ useState } from "react";
import { Container, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import homeLogo from "../../Assets/gambarlogin.png";
import {FcGoogle}from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const Auth = async(e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/Login',{
        email: email,
        password: password
      });
     navigate("/dashboard")
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
      
    }

  }

  return (
    <Layout title="UNI Vitation | Login">
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
                  style={{ maxHeight: "700px" }}
                />
              </Col>
                {/* <img
                  src={'https://medinacatering.id/wp-content/uploads/2020/02/4-Wedding-Venue-Pilihan-di-Jakarta-Selatan.jpg'}
                  alt="home pic"
                  style={{width:"100%" }}
                />
              </Col> */}
              <div class="login-form">
             
                   <form onSubmit={ Auth }>
                     <h1>Login</h1>
                     <p className="has-text-centered">{msg}</p>
                       <div class="content">
                        <div class="col-md-15 mb-3">
                           <label
                            style={{ textAlign: "justify" }}
                  for="validationCustom01"
                >
                  {/* Email */}
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
                  {/* Password */}
                  <input
                    type="password"
                    class="form"
                    placeholder="Password"
                    value={password} onChange={(e)=> setPassword(e.target.value)}
                    required
                  ></input>
                  <div class="valid-feedback">Look</div>
                </label>
                <div class="action">
              <button class="btn btn-secondary">
                Login
              </button>
              
            </div>
            <div style={{marginTop:"20px"}}>
              <div class="google">
              <button >
                <FcGoogle/>
                <a style={{marginLeft:"20px"}} href="/">
                </a>
                Login dengan Google
              </button>
            </div>
            </div>
              </div>
            </div>
            

            <div>
              <p>
              Belum Memiliki Akun? Silahkan<a href="/SignUp"> SignUp</a>.
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
export default Login;
