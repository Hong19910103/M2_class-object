import {Book} from "./Book";

 export class Bookmanager { // khoi tao doi doi uong quan ly sach

    bookManager:Book[] = [];

    constructor() {
    }

    addBook(book:Book){
        this.bookManager.push(book);
        return this.bookManager;
    }
    getBook():Book[]{
        return this.bookManager;
    }
    findIndex(ID:string){
        let i= -1;
        this.bookManager.forEach((book,index)=>{
            if (book.getID()===ID){
                  i=index;
                  return i;
            }
            })
        return i;

    }


    deleteBook(ID:string) {
        if (this.findIndex(ID)!==-1){
            console.log(this.bookManager.splice(this.findIndex(ID), 1));

        }else {
            return "no delete"
        }
    }

    updateBook(ID:string,name:string){
        if(this.findIndex(ID)!==-1){
            this.bookManager[this.findIndex(ID)].setName(name);
        } else {
           return "no update"
        }

    }

}