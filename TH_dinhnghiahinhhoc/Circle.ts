class Circle {

    color: string;
    filled: boolean;
    radius: number;

    constructor(color: string,
                filled: boolean,
                radius: number) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter(): number {
        return 2 * this.radius * Math.PI;

    }
}
let c1=new Circle("blue",false,6);
console.log(c1.getArea());
console.log(c1.getPerimeter());
