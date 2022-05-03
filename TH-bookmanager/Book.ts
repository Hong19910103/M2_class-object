export class Book { // khoi tao lop doi tuong book co cac thuoc tinh ben duwoi

    title: string;
    author: string;
    alreadyRead: boolean;

    constructor(title: string,
                author: string,
                alreadyRead: boolean) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }


}