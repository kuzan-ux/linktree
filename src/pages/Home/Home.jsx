import React from 'react';
// import { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { HiCheck} from 'react-icons/hi';
// import Footer from '../../Components/Footer/Footer';
import './home.css';
import Main from '../../components/Main';
import Footer from '../../components/Footer';


const Home = () => {
  return (
      <div className='home'>
        <Main />
        <Footer />
      </div>
    )
  }

  export default Home