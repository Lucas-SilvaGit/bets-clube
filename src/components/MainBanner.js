import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import '../App.css';

const MainBanner = () => {
  return (
      <Container>
        <div className=''>
          <div className="banner-container d-flex align-items-center justify-content-center mb-6">
            <img src={logo} alt="Logo" className="logo mr-3" />
            <div>
              <h1 className="mb-0 ml-0">BET´S CLUBE</h1>
            </div>
            
          </div>
          <div className='d-flex col-12 align-items-center justify-content-center text-center'>
            <span className='slogan'>Revolucione Suas <br /> Operações na Blaze</span>
          </div>
        </div> 
      </Container>
    )
  }

export default MainBanner;