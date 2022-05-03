class Shape {
    private _color:string;
    private _filled:boolean;

    constructor(color: string,
                filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    getColor(): string {
        return this._color;
    }

    getFilled(): boolean {
        return this._filled;
    }

    setColor(color: string) {
        this._color = color;
    }

    setFilled(filled: boolean) {
        this._filled = filled;
    }
}
let s1 = new Shape("blue",false)
console.log(s1);

