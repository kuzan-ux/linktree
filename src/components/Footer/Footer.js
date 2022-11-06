import React from 'react';
import './footer.css';
import zuri from '../../assets/images/zuri.png';
import dot from '../../assets/images/Vector.png';
import ing from '../../assets/images/I4G.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
          <div className='Zuri-vector'>
            <img className='dot' src={dot} alt='zuri-logo' />
            <img className='zuri' src={zuri} alt='zuri-logo' />
          </div>
          <p> HNG Internship 9 Frontend Task</p>
          <img src={ing} alt='ingressive for good' />
        </div>
    </div>
  )
}

export default Footer