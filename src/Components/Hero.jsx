import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/portfolioImage.webp"
function Hero(){
return(
    <Description>
        <Text>
        <h3>Introducing</h3>
        <hr />
        <h1>Agatha Onuigbo</h1>
        <p>
        Hi, I am Agatha Onuigbo Adaeze - Nigerian-based UI/UX Designer turned Frontend Developer who specializes in 
        providing frontend solutions that immerse its users. <br/> <br/>My recent projects are embedded in this porfolio, and it is my hope that you enjoy browsing it as much as I enjoyed building it.
        </p>
        </Text>
        <Image>

        </Image>
    </Description>
);
}

export default Hero;

const Description = styled.div `
background-size: cover; height: 700px; display: flex; gap: 100px; 
`
const Image = styled.div ` margin-left: 50px;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
background-image: url(${backgroundImage}); width: 600px; height: 650px; background-size: cover; border-radius: 50px; border: none;
`
const Text = styled.div`
   width: 700px; align-content: center; margin-left: 50px;
   h3{font-size: 40px; font-family: 'Work Sans', sans-serif; font-weight: 600; font-size: 2.5rem; color: #333; margin-bottom: -5px;}
   hr{}
   h1{font-size: 60px; font-family: 'Work Sans', sans-serif; font-weight: 600; font-size: 5.0rem; color: #333; margin-top: -10px;}
   p{font-size: 20px;  font-family: 'Lora', serif; font-size: 1.2rem; color: #333;  }
`