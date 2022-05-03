"use strict";
exports.__esModule = true;
exports.Bookmanager = void 0;
var Bookmanager = /** @class */ (function () {
    function Bookmanager() {
        this.bookManager = [];
    }
    Bookmanager.prototype.addBook = function (book) {
        this.bookManager.push(book);
        return this.bookManager;
    };
    Bookmanager.prototype.getBook = function () {
        return this.bookManager;
    };
    Bookmanager.prototype.findIndex = function (ID) {
        var i = -1;
        this.bookManager.forEach(function (book, index) {
            if (book.getID() === ID) {
                i = index;
                return i;
            }
        });
        return i;
    };
    Bookmanager.prototype.deleteBook = function (ID) {
        if (this.findIndex(ID) !== -1) {
            console.log(this.bookManager.splice(this.findIndex(ID), 1));
        }
        else {
            return "no delete";
        }
    };
    Bookmanager.prototype.updateBook = function (ID, name) {
        if (this.findIndex(ID) !== -1) {
            this.bookManager[this.findIndex(ID)].setName(name);
        }
        else {
            return "no update";
        }
    };
    return Bookmanager;
}());
exports.Bookmanager = Bookmanager;
