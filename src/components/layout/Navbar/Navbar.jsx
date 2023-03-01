import React from 'react';
import './Navbar.css';
import logo from '../../../assets/imgs/logo-tekup-02.png';
import TranslateIcon from '@mui/icons-material/Translate';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
const Navbar = () => {
  return (
    <div className="navbar-wrap">
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} className="logo__img" alt="logo-tekup" />
        </div>
        <div className="navbar__list">
          <ul className="list__page">
            <li className="page__item">Home</li>
            <li className="page__item">About Us</li>
            <li className="page__item">Services</li>
            <li className="page__item active">Projects</li>
            <li className="page__item">Contact</li>
            <li className="page__item">Blog</li>
            <li className="page__item item__langua">
              <span>
                <TranslateIcon />
                language
                <KeyboardArrowDownIcon />
              </span>
            </li>
          </ul>
          <button className="btn__contact">
            <MailOutlineIcon />
            Contact us
          </button>
        </div>
      </div>
      <div className="navbar__contact">
        <div className="navbar__contact--left">
          <FmdGoodOutlinedIcon />
          <span>Đà Nẵng, Việt Nam</span>
        </div>
        <div className="navbar__contact--right">
          <span>Follow us on</span>
          <FacebookOutlinedIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
