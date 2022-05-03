class StopWatch{
    private _startTime:Date;
    private _endTime :Date;

    constructor(startTime: Date, endTime: Date) {
        this._startTime = startTime;
        this._endTime = endTime;
    }

    get startTime(): Date {
        return this._startTime;
    }

    get endTime(): Date {
        return this._endTime;
    }

    set startTime(value: Date) {
        this._startTime = value;
    }

    set endTime(value: Date) {
        this._endTime = value;
    }

}
function getElapsedTime(){
     let getTime=  -this._startTime;

}