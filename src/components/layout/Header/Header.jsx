import React from 'react';
import tekupVideo from '../../../assets/videos/tekup-video-background.mp4';
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <div className="video-background">
        <video autoPlay loop muted src={tekupVideo} type="video/mp4" />
      </div>
    </div>
  );
};

export default Header;
