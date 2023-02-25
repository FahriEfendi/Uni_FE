import { Navbar,Container,Card} from "react-bootstrap"
import {BiLogOut} from "react-icons/bi";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function TopBAr() {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate("/login")
        } catch (error) {
            console.log(error)
            
        }
    }

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
        
        <Card.Header style={{textAlign:"right",backgroundColor:"#ffff",width:"100%",position:"top",position:"fixed",zIndex:"9"}}>{name} <span style={{marginLeft:"30px",margin:"30px",}}>
            <a
                onClick={Logout}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BiLogOut />
              </a></span></Card.Header>
    
    )
}

export default TopBAr