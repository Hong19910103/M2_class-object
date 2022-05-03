class Rectagle { //Xay dung lop hinh chu nhat co 4 thuc tinh, 2 phuong thuc

    color:string;
    filled: boolean;
    width:number;
    height:number;

    constructor(color: string,
                filled: boolean,
                width: number,
                height: number) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.height = height;
    }
    getArea():number{
        return (this.width*this.height);
    }
    getPerimeter():number{
        return (this.height+this.width)*2;
    }
}
let r1= new Rectagle("blue",false,55,8);
console.log(r1.getArea());
console.log(r1.getPerimeter());
