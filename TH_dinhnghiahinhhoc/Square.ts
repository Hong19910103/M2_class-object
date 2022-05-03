class Square {
    color: string;
    filled:boolean;
    side:number;


    constructor(color: string, filled: boolean, side: number=1.0) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }

}
let s1=new Square("blue",true,8.5)
let s2=new Square("green",false);
console.log(s1);
console.log(s2);
