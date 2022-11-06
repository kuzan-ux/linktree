import React from 'react';
import './social.css';
import slack from '../../assets/images/slack.png';
import git from '../../assets/images/git.png'


const Social = () => {
  return (
    <div className='social'>
      <img src={slack} alt='slack' />
      <img src={git} alt='slack' />
    </div>
  )
}

export default Social