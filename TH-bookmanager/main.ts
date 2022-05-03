import {Book} from "./Book";

let book1 = new Book("sach1","tacgia1",true);
let book2 = new Book("sach2","tacgia2",true);
let book3 = new Book("sach3","tacgia3",false);

let books: Book[]=[];
books.push(book1,book2,book3);

function bookAlready(){
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let bookInfor = `${book.title} by ${book.author}`;
        if(book.alreadyRead){
            console.log(`${bookInfor} alreadyRead`);
        } else {
            console.log(`${bookInfor} you need to read`)
        }

    }
}
 bookAlready();
