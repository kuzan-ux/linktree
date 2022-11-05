import React from 'react';
import icon1 from '../assets/images/ppic.jpg';
import { Link } from "react-router-dom";
// import hover from '../assets/images/icon hover.png';
import share from '../assets/images/share.png';
import slack from "../assets/images/slack.png";
import git from "../assets/images/git.png";


function Main() {
  let twitter="#";
  let zuri= "https://training.zuri.team/";
  let books="https://books.zuri.team";
  let python="https://books.zuri.team/python-for-beginners?ref_id=KuzanSenpai";
  let background="https://background.zuri.team";
  let design="https://books.zuri.team/design-rules";
  let slacklink = "#";
  let gitlink = "https://github.com/kuzan-ux";

  return(
    <div id= "container">
      <div id="main">
        <div id="main2">
          <header>
            <div>
              <img src= { icon1 } alt='profile pic' id="profile__img"/>

              <h3 id="twitter">kiingtegzy</h3>
              {/* <h3 id="slack">KuzanSenpai</h3> */}
            </div>
          </header>
          <img src= { share } alt='share icon' id="shareicon"/>
          <div id="links">
            <a href={ twitter } id="twitterlink" className="btn">Twitter Link</a>
            <a href={ zuri } id="btn__zuri" className="btn" title="Books">Zuri Team</a>
            <a href={ books } id="books" className="btn">Zuri Books</a>
            <a href={ python } id="book__python" className="btn">Python Books</a>
            <a href={ background } id="pitch" className="btn">Background Check For Coders</a>
            <a href={ design } id="book__design" className="btn">Design Books</a>
            <a href='linktree/contact' className="btn"><Link to={"/linktree/contact"} >Contact Me</Link></a>
          </div>
          <div id="social">
            <div id="social2">
              <a href={ slacklink } ><img src={ slack } alt="slack_social" className="socialicon" /></a>
              <a href={ gitlink } ><img src={ git } alt="git_social"  className="socialicon"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Main