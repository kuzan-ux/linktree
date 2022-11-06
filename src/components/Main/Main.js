import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './main.css';
import mes from '../../assets/images/ppic.jpg';
import share from '../../assets/images/share.png';
import shares from '../../assets/images/shares.png';



const Main = () => {

  const Team = 'https://training.zuri.team';
  const Books = 'https://books.zuri.team';
  const Python = 'https://books.zuri.team/python-for-beginners?ref_id=Harny';
  const Pitch = 'https://background.zuri.team';
  const Design = 'https://books.zuri.team/design-rules';

  return (
    <div className='main'>
      <div className='main-content'>
        <div className='main-profile'>
          <div className='images' >
            <img id='profile__img' src={mes} alt='profile' />
          </div>
          <p id='twitter' >kiingtegzy</p>
          {/* <p id='slack'>HKuzanSenpai</p> */}
          <div className='hover'>
            <img className='share' id='desktop' src={share} alt='share' />
            <img className='share' id='mobile' src={shares} alt='share-mobile' />
            
          </div>
        </div>
        <div className='main-link'>
          <a href='.'>Twitter Links</a>
          <a id='btn__zuri' href={Team}>Zuri Teams</a>
          <a id='books' href={Books} title='This is where you find books about design and coding' >Zuri Books</a>
          <a id='book__python' href={Python} title='Best place to fetch resources to jumpstart tech careers' >Python Books</a>
          <a id='pitch' href={Pitch} title='validate your all codes at cheapest rates'>Background Check for Coders</a>
          <a id='book__design' href={Design} title='Best place to get amazingly free designs' >Design Books</a>
          <a href='#'><Link to={"/linktree/contact"} >Contact Me </Link></a>
        </div>
      </div>
    </div>
  )
}

export default Main