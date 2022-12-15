import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: beige;
`;

const Text = styled.div`
    display: flex;
`;

const Image = styled.div`
    margin-left: 10%;
    height: 30%;
    background-color: black;
    color: whitesmoke;
    display: flex;
`;

class Header1 extends Component {
    render() {
        return(
            <Container>
                <Text>Random Text</Text>
                <Image>Image goes here</Image>
            </Container>
        )
    }
}

export default Header1;