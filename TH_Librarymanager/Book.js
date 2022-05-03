"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(ID, name) {
        this._ID = ID;
        this._name = name;
    }
    Book.prototype.getID = function () {
        return this._ID;
    };
    Book.prototype.getName = function () {
        return this._name;
    };
    Book.prototype.setName = function (name) {
        this._name = name;
    };
    return Book;
}());
exports.Book = Book;
