import React, { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Fitur from "./pages/Home/Home2";
import Harga from "./pages/Home/Home4";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import BukuTamu from './pages/Dashboard/BukuTamu';
import BuatUndangan from './pages//Dashboard/BuatUndangan';
import Dashboard from './pages/Dashboard/Dasboard';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import QRCode from "./pages/Dashboard/QRCode";
import Sakura from "./pages/tema/temasakura";
import Sakura2 from "./pages/tema/sakura2";
import BW from "./pages/tema/temaBW";
import BW2 from "./pages/tema/BW";
import Vin from "./pages/tema/temavin";
import Vin2 from "./pages/tema/vin";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
      {/* <Sidebar> */}
        

        <div className="App" id={load ? "no-scroll" : "scroll"}>
          {/* <Navbar /> */}
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route exact path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/harga" element={<Harga />} />
          <Route path="/BukuTamu" element={<BukuTamu />} />
          <Route path="/BuatUndangan" element={<BuatUndangan />} />
          <Route path="/QRCode" element={<QRCode />} />
          <Route path="/Sakura" element={<Sakura />} />
          <Route path="/Sakura2" element={<Sakura2 />} />
          <Route path="/BW" element={<BW />} />
          <Route path="/BW2" element={<BW2 />} />
          <Route path="/Vin" element={<Vin />} />
          <Route path="/Vin2" element={<Vin2 />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          {/* <Footer /> */}
        </div>
        {/* </Sidebar> */}
      </Router>
    </>
  );
}

export default App;
