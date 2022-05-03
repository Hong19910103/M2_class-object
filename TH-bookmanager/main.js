"use strict";
exports.__esModule = true;
var Book_1 = require("./Book");
var book1 = new Book_1.Book("sach1", "tacgia1", true);
var book2 = new Book_1.Book("sach2", "tacgia2", true);
var book3 = new Book_1.Book("sach3", "tacgia3", false);
var books = [];
books.push(book1, book2, book3);
function bookAlready() {
    for (var i = 0; i < books.length; i++) {
        var book = books[i];
        var bookInfor = "".concat(book.title, " by ").concat(book.author);
        if (book.alreadyRead) {
            console.log("".concat(bookInfor, " alreadyRead"));
        }
        else {
            console.log("".concat(bookInfor, " you need to read"));
        }
    }
}
bookAlready();
