import React from 'react';
import styled from 'styled-components'
const Container=styled.div`
display:flex;
margin-top:30px;

`
const Form=styled.form`
    width: 360px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 1px 2px 3px 2px rgba(0,0,0,0.1);
    border-radius: 10px;
    background: white;
    font-size:30px;
    font-weight:200;
    margin-bottom: 40px;
`
const Label=styled.h2`
display: block;
font-size:30px;
margin: 10px 0 10px;
`
const Input=styled.input`
    padding: 10px 12px;
    border-radius: 6px;
   
    border: 2px solid #ddd;
    font-size: 30px;
    width: 100%;
    font-style:none;
`
const Button=styled.button`
    margin-top: 30px;
    border-radius:20px;
    color: white;
    background-color:#660099;
    border:0;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 0.8em;
    display: block;
    padding: 10px 16px;
    letter-spacing: 2px;
`
const Signup = (props) => {
    return (
        <Container>
        <Form>
        <h2>Sign Up</h2>
        <Label>Name</Label>
        <Input type="text"/>
        <Label>Email Id</Label>
        <Input type="email"/>
        <Label>Password</Label>
        <Input type="password" />
        <Button>Submit</Button>
        </Form>
        </Container>
    );
};

export default Signup;