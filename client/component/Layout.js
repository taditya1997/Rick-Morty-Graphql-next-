import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const Main=styled.div`
display:flex;
flex-direction:column;
width:100%;
margin-left:5px;
`
const Layout = ({children}) => {
    return (
        
        <Main>
        <Navbar/>
        {children}
        </Main>
    );
};

export default Layout;