import React from 'react';
import './home.css';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import Social from '../../components/Social/Social';


const Home = () => {
  return (
    <div className='homepage'>
      <div className='home'>
        <Main />
        <Social />
      </div>
      <Footer />
    </div>
  )
}

  export default Home