import React from 'react';
import './style.scss';

import Logo from './../../assets/image2.jpg';
import {Link} from 'react-router-dom'

const Header = props => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="SimpleTut LOGO" />
          </Link>  
        </div>
        <div className="callToActions">
          <ul>
            <li>
            <Link to="/registration">
              <button className="butn form-group btn btn-info">
                Register
              </button>
            </Link>
            &nbsp;
            <Link to="/login">
              <button className="butn form-group btn btn-warning">
                Login
              </button>
            </Link>
            </li>   
          </ul> 
        </div>
      </div>
    </header>
  );
};
export default Header;