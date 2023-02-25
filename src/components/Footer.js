import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Linkedin from "@mui/icons-material/LinkedIn";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="SocialMedia">
        <InstagramIcon />
        <Facebook />
        <Twitter />
        <Linkedin />
      </div>
      <p>&copy; 2023 Pizza...</p>
    </div>
  )
}

export default Footer;