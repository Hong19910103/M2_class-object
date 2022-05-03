class Point{
    x: number;
    y: number

    constructor(x: number,
                y: number) {
        this.x = x;
        this.y = y;
    }
    DisplayName = "Point"

    distance(b){
        let dx = this.x-b.x;
        let dy= this.y-b.y;
       return Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));

    }
}

let p1 = new Point(4,5);
let p2 = new Point(8,3);

console.log(p1.DisplayName);
console.log(p1.distance(p2));
