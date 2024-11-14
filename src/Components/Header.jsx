import React from "react";
import styled from "styled-components";


const  Header =()=>{
    return(
        <HeaderContainer>
            <h1>Holla!</h1>
            <NavBar>
                <span><a href="#Home">Home</a></span>
                <span><a href="#About">About</a></span>
                <span><a href="#Skills">Skills</a></span>
                <span><a href="#Projects">Projects</a></span>
                <button><a href="#Contact Me">Contact Me</a></button>
            </NavBar>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    display: flex; gap: 300px;
    h1 {
     width: 150px; margin-left: 50px; font-family: 'Work Sans', sans-serif; font-weight: 600; font-size: 2.5rem; color: #333; 
    }
`


const NavBar = styled.div `
 a {text-decoration: none; font-family: 'Lora', serif;  color: #333;}
gap: 40px; width: 1000px; display: flex; justify-content: space-between; align-items: center;
button {
    width: 100px; height: 40px; border-radius: 20px; border: none; background: #333; a {color: white};
    }
`