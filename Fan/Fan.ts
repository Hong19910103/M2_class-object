 export enum Speed {
    LOW =1,
    MEDIUM,
    FAST
}

 export class Fan{
    private _speed:Speed;
    private _on:boolean;
    private _radius:number;
    private _color:string;


    constructor(speed: Speed, on: boolean, radius: number, color: string) {
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }

    getSpeed(): Speed {
        return this._speed;
    }

    setSpeed(value: Speed) {
        this._speed = value;
    }

    getOn(): boolean {
        return this._on;
    }

    setOn(value: boolean) {
        this._on = value;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number) {
        this._radius = value;
    }

    getColor(): string {
        return this._color;
    }

    setColor(value: string) {
        this._color = value;
    }
    toString(){
        if(this.getOn()===true){
            return `Fan is on  ${this.getSpeed()} ${this.getColor()} ${this.getRadius()}`;
        } else {
           return `Fan is off  ${this.getSpeed()} ${this.getColor()}  ${this.getRadius()}`;
        }
    }
}
