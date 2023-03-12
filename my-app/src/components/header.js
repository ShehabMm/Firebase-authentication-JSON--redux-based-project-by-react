import React from 'react';
import { Link } from 'react-router-dom';
import "../components/header.css"
const Header = () => {
  return (
    <>
      <nav className="head1">
        <ul>

          <li> <Link to="/TheContent"> My Portfolio</Link></li>
          <li> <a href="https://courageous-froyo-50292c.netlify.app/#mypro">My Works</a></li>
          <li> <a href="https://drive.google.com/file/d/162R-U5Dlm4KraIG1Dpz6PVUZZXiQIT1_/view?usp=sharing">download my resume</a> </li>
          <li> <Link to="/Form">contact</Link> </li>



        </ul>
      </nav>


    </>

  );
}

export default Header;
