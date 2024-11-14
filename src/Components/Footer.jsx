import React from "react";
import styled from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { CgMail } from "react-icons/cg";
import { FaSquareXTwitter } from "react-icons/fa6";


const  Footer =()=>{
    return(
        <FooterContainer>
          <ContactNLinks>
                     <h1>LET'S STAY CONNECTED</h1>
                <SocialLinks>
                    <a href=""><CgMail /></a>
                    <a href=""><FaGithub /></a>
                    <a href=""><SlSocialLinkedin /></a>
                    <a href=""><IoLogoWhatsapp /></a>
                    <a href=""><FaSquareXTwitter /></a>
                </SocialLinks>
          </ContactNLinks>
          <Copyright>
            <p>@2024 Agatha Onuigbo</p>
            <button>Back to Top</button>
          </Copyright>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.div`
    background-color: #333; height: 200px;
`
const ContactNLinks = styled.div`
display: flex; justify-content: space-evenly;
`
const SocialLinks = styled.div`
    
`
const Copyright = styled.div`

`