import React from 'react';
import IconLink from '../buttons/IconLink';
import Github from '../../res/footer-github.png';
import YouTube from '../../res/footer-youtube.png';
import "./style.css";

const Footer = () => {
  return (
    <div className="footer ">
      <span>{/* Developed by  */}</span>
      <IconLink
        href={'https://github.com/imjvdn/DUFinalProject'}
        icon={Github}
        title="Github"
        className="social-icon"
        buttonStyle={{ verticalAlign: 'sub' }}
      />
    </div>
  );
};

export default Footer;
