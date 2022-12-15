// Database used => mynewdb
// Collection used => library2022

import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";

// const ContainerOuter = styled.div`
//     display: flex;
// `;

const ContainerInner = styled.div`
    /* display: flex; */
`;

const Heading = styled.h2`
    display: flex;
`;

const Table = styled.table`
    background-color: whitesmoke;
`;

const Tr = styled.tr`
    
`;

const Td = styled.td`
    
`;

const Action = styled.div`

`;

const Button = styled.div`

`;

class AddNewBook extends Component {
    constructor() {
        super();
        this.state = {
            bookid: null,
            bookname: null,
            bookprice: null,
            bookauthorname: null,
            bookpublisheddate: null,
            action: 'null'
        }
    }
    addBookButton() {
        var bookObject = {
            bookid: this.refs.BookId.value,
            bookname: this.refs.BookName.value,
            bookprice: this.refs.BookPrice.value,
            bookauthorname: this.refs.BookAuthorName.value,
            bookpublisheddate: this.refs.BookPublishedDate.value
        }
        axios.post('http://localhost:3000/add-new-book', bookObject)
            .then((response) => {
                console.log('response = ' + JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            })
        this.setState({
            bookid: null,
            bookname: null,
            bookprice: null,
            bookauthorname: null,
            bookpublisheddate: null,
            action: 'Entered Details Added to Library Successfully'
        })
    }
    render() {
        return (
            <div>
                <Header1 />
                <Header2 />
                <ContainerInner>
                    <Heading>Enter Book Details : </Heading>
                    <br />
                    <Table>
                        <Tr>
                            <Td>Enter the Book ID : </Td>
                            <Td><input type="text" ref="BookId" placeholder="Book ID" /></Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter the Book Name : </Td>
                            <Td><input type="text" ref="BookName" placeholder="Book Name" /></Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter Book Price : </Td>
                            <Td><input type="number" ref="BookPrice" placeholder="Book Price" /></Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter Author Name : </Td>
                            <Td><input type="text" ref="BookAuthorName" placeholder="Author Name" /></Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter Published Date : </Td>
                            <Td><input type="date" ref="BookPublishedDate" placeholder="Published Date" /></Td>
                        </Tr>
                    </Table>
                    <br />
                    <Action>{this.state.action}</Action>
                    <br />
                    <Button><button type="button" onClick={() => this.addBookButton()}>Add Book to Library</button></Button>
                </ContainerInner>
            </div>
        )
    }
}

export default AddNewBook;
