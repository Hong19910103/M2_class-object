export class Book{

    private _ID: string;
    private _name:string;

    constructor(ID:string,
                name:string) {
        this._ID = ID;
        this._name = name;
    }

    getID(): string {
        return this._ID;
    }

    getName(): string {
        return this._name;
    }
    setName(name: string) {
        this._name = name;
    }
}