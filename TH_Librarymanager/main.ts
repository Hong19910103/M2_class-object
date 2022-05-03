import {Book} from "./Book";
import {Bookmanager} from "./Bookmanager";

let b1 = new Book("s1","hoc1");
let b2 = new Book("s2","hoc2");
let b3 = new Book("s3","hoc3");
let b4 = new Book("s4","hoc4");
let b5 = new Book("s5","hoc5");

let manager = new Bookmanager();
manager.addBook(b1)
manager.addBook(b2);
manager.addBook(b3);
manager.addBook(b4);
console.log(manager.addBook(b5));


// console.log(manager.findIndex("s3"));

console.log(manager.deleteBook("s3"));
console.log(manager.getBook());

console.log(manager.updateBook("s4", "hoc7"));
console.log(manager.getBook());


