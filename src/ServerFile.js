var express = require('express');
const bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mongoClient = mongodb.mongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'librarymanagementsystem';
const cors = require('cors');

var app = express();
app.use(bodyParser.json());

app.use(cors());

app.get('/', (request, response) => response.send('Express Server Started'))

// send data from webpage to database

// app.post('http://localhost:3000/add-new-book', function(request, response) {
app.post('add-new-book', function(request, response) {
    var varBookId = request.body.bookid;
    var varBookName = request.body.bookname;
    var varBookPrice = request.body.bookprice;
    var varBookAuthorName = request.body.bookauthorname;
    var varBookPublishedDate = request.body.bookpublisheddate;

    // bookid : this.refs.BookId.value,
    // bookname : this.refs.BookName.value,
    // bookprice : this.refs.BookPrice.value,
    // bookauthorname : this.refs.BookAuthorName.value,
    // bookpublisheddate : this.refs.BookPublishedDate.value

    mongoClient.connect(url, function(error, clientConn) {
        if(error) {
            console.log(error);
        }
        else {
            console.log('Succesfully Connected');
            const db = clientConn.db(dbName);
            db.Collection('library2022').insertOne({
                bookid : varBookId,
                bookname : varBookName,
                bookprice : varBookPrice,
                bookauthorname : varBookAuthorName,
                bookpublisheddate : varBookPublishedDate
            })
        }
        response.send('New Book-Issuer Inserted');
    })
})

// app.post('/')

// send data from database to webpage

// app.get('/')