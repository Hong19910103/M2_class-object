export class QuadraticEquation {
    private _a: number;
    private _b: number;
    private _c: number;

    constructor(a: number, b: number, c: number) {
        this._a = a;
        this._b = b;
        this._c = c;
    }

    get a(): number {
        return this._a;
    }

    get b(): number {
        return this._b;
    }

    get c(): number {
        return this._c;
    }

    getDiscriminant():any {
        if (this.a!==0){
            return Math.pow(this.b, 2) - 4 * this.a * this.c
        }
        else {
            return 'Không là pt bậc hai';
        }

    }

    getRoop1() {
        if(this.getDiscriminant()<0){
            return `vo nghiem`
        } else{
            return (-this.b-Math.sqrt(this.getDiscriminant()))/(2*this.a);
        }
    }

    getRoop2() {
        if(this.getDiscriminant()<0){
            return `vo nghiem`
        } else{
            return (-this.b+Math.sqrt(this.getDiscriminant()))/(2*this.a);
        }
    }

}

