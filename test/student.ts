export class Student {
    private _name: string;
    private _classmate: string;
    private _point: number;


    constructor(name: string,
                classmate: string,
                point: number) {
        this._name = name;
        this._classmate = classmate;
        this._point = point;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get classmate(): string {
        return this._classmate;
    }

    set classmate(value: string) {
        this._classmate = value;
    }

    get point(): number {
        return this._point;
    }

    set point(value: number) {
        this._point = value;
    }
}