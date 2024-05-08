
export class AlarmId {
    constructor(public value: string) {}
}

export class Alarm {
    ringtone = new Audio('/ringtone.mp3')

    constructor(public id : AlarmId , public time: Date, public hasRinged : boolean = false) {}

    ring() {
        this.ringtone.play()
        this.hasRinged = true
    }

}