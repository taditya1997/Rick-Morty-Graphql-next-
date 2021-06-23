import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav=styled.nav`
margin: 20px;
padding: 5px ;
display: flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #ddd;
max-height:50px;
`
const LinkContainer=styled.div`
display:flex;
justify-content:space-between;
flex-direction:row;
flex-wrap:nowrap;
width:200px;
font-weight:700;
margin:10px;
`

const Navbar = (props) => {
    return (
        <Nav>
        <div>
        <h1>Rick&Morty</h1>
        </div>
        <LinkContainer>
        <Link href="/">
        <a>Home</a>
        </Link>
        <Link href="/login"><a>LogIn</a></Link>
        <Link href="/signup"><a>SignUp</a></Link>
        </LinkContainer>
       

        </Nav>
    );
};

export default Navbar;