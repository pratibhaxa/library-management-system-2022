import axios from "axios";
import React, {Component} from "react";
// import '../NewbookDemo.css';
// import Header1 from "./Header1";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
// import Header2 from "./Header2";
import { Link } from "react-router-dom";

class NewbookDemo extends Component{
    constructor(){
        super();
        this.state={
            bookid:null,
            bookname:null,
            bookprice:null,
            bookauthorname:null,
            bookpublisheddate:null,
            // issuerid:null,
            // issuername:null,
            // issuerphonenumber:null,
            // issueraddress:null,
            // issuerdate:null,
            action1:null
        }
    }
    addBookButton(){
        let bookObject={
            bookid:this.refs.BookId.value,
            bookname:this.refs.BookName.value,
            bookprice:this.refs.BookPrice.value,
            bookauthorname:this.refs.BookAuthorName.value,
            bookpublisheddate:this.refs.BookPublishedDate.value,
            // issuerid:this.refs.IssuerId.value,
            // issuername:this.refs.IssuerName.value,
            // issuerphonenumber:this.refs.IssuerPhoneNumber.value,
            // issueraddress:this.refs.IssuerAddress.value,
            // issuerdate:this.refs.IssuerDate.value,
        }
        axios.post('http://localhost:3001/addBook',bookObject)
            .then((response)=>{
                console.log('response = '+JSON.stringify(response.data));
            })
            .catch((error)=>{
                console.log(error);
            })
        this.setState({
            bookid:null,
            bookname:null,
            bookprice:null,
            bookauthorname:null,
            bookpublisheddate:null,
            // issuerid:null,
            // issuername:null,
            // issuerphonenumber:null,
            // issueraddress:null,
            // issuerdate:null,
            action1:'Entered Details Added to Library'
        })
    }
    render(){
        return(
            <div>
                <Header1 />
                <Header2 />

                <div>
                    <h2 className='book-detail-input-header'>
                        Enter Book Details :
                    </h2>
                    {/* <table>
                        <tr> */}
                            <div className='book-detail-input-div'>
                                {/* BOOK DETAIL INPUT */}
                                <table className='book-detail-input-table'>
                                <tr className='table1-tr'>
                                    <td className='ask'>Enter the Book ID : </td>
                                    <td><input type='text' ref='BookId' placeholder='Book ID' className='input' required/></td>
                                </tr>
                                <br/>
                                <tr className='table1-tr'>
                                    <td className='ask'>Enter the Book Name : &nbsp;</td>
                                        <td><input type='text' ref='BookName' placeholder='Book Name' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table1-tr'>
                                        <td className='ask'>Enter Book Price : </td>
                                        <td><input type='number' ref='BookPrice' placeholder='Book Price' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table1-tr'>
                                        <td className='ask'>Enter Author Name : </td>
                                        <td><input type='text' ref='BookAuthorName' placeholder='Author Name' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table1-tr'>
                                        <td className='ask'>Enter Published Date : </td>
                                        <td><input type='date' ref='BookPublishedDate' placeholder='Published Date' className='input' required/></td>
                                    </tr>
                                </table>
                            </div>
                        {/* <td> */}
                            {/* <th className='issuer-detail-input-header'>
                                Enter Issuer Details :
                            </th> */}
                            {/* <div className='issuer-detail-input-div'>
                                {/* ISSUER DETAIL INPUT */}
                                {/* <table className='issuer-detail-input-table'>
                                    <tr className='table2-tr'>
                                        <td>Enter the Issuer ID : </td>
                                        <td><input type='text' ref='IssuerId' placeholder='Issuer ID' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table2-tr'>
                                        <td>Enter Full Name : &nbsp;</td>
                                        <td><input type='text' ref='IssuerName' placeholder='Issuer Name' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table2-tr'>
                                        <td>Enter Phone Number : </td>
                                        <td><input type='number' ref='IssuerPhoneNumber' placeholder='Phone Number' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table2-tr'>
                                        <td>Enter Issuer Address : </td>
                                        <td><textarea type='text' ref='IssuerAddress' placeholder='Issuer Address' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table2-tr'>
                                        <td>Enter Issued Date : </td>
                                        <td><input type='date' ref='IssuerDate' placeholder='Book Issued Date' className='input' required/></td>
                                    </tr>
                                </table>
                            </div> */}
                        {/* </td> */}
                    {/* </tr>
                </table> */}
                <br/>
                {/* SUBMIT BUTTON ACTION */}
                <span className='addbook-submit-action1'>{this.state.action1}</span>
                <br/><br/>

                {/* SUBMIT BUTTON */}
                <div className='addbook-button-div'>
                    <button type='button' onClick={()=>this.addBookButton()} className='addbook-button'>Add Book to Library</button>
                </div>
                <br/><br/><br/>

                </div>
            </div>
        )
    }
}

export default NewbookDemo;