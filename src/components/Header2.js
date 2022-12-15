import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    background-color: beige;
`;

const Home = styled.div`
    display: flex;
    background-color: aqua;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: none;
`;

class Header2 extends Component {
    render() {
        return(
            <Container>
                <Home><Link to='/' style={{textDecoration: "underline", backgroundColor: "beige", color: "black", }}>Home</Link></Home>
                <Home><Link to='/add-new-book' style={{textDecoration: "underline", backgroundColor: "beige", color: "black", }}>Add New Book</Link></Home>
                <Home><Link to='/view-books' style={{textDecoration: "underline", backgroundColor: "beige", color: "black", }}>View Books</Link></Home>
                <Home><Link to='/contact-us' style={{textDecoration: "underline", backgroundColor: "beige", color: "black", }}>Contact Us</Link></Home>
                <Home><Link to='/signup' style={{textDecoration: "underline", backgroundColor: "beige", color: "black", }}>Sign Up</Link></Home>
                <Home><Link to='/login' style={{textDecoration: "underline", backgroundColor: "beige", color: "black", }}>Login</Link></Home>
                <Home><Link to='/add-new-book-demo' style={{textDecoration: "underline", backgroundColor: "beige", color: "black", }}>Add New Book Demo</Link></Home>
            </Container>
        )
    }
}

export default Header2;