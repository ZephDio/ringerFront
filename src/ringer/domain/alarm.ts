import { SerializedAlarm } from "../../App/state"

export class AlarmId {
    constructor(public value: string) {}
}

export enum AlarmState {
    PASSED = "Passed",
    RINGING = "Ringing",
    PENDING = "Pending",
}

export class AudioWrapper {
    constructor(public audio : null | HTMLAudioElement) {}
    play() {
        if(!this.audio) return
        this.audio.play()
    }
    pause() {
        if(!this.audio) return
        this.audio.pause()
    }
}


export class Alarm {

    constructor(public id : AlarmId , public time: Date, public state : AlarmState = AlarmState.PENDING, public ringtone : AudioWrapper = new AudioWrapper(new Audio('./ringtone.mp3'))) {}

    ring() {
        this.ringtone.play()
        this.state = AlarmState.RINGING
    }

    acknowledge() {
        this.ringtone.pause()
        this.state = AlarmState.PASSED
    }

    getRemainingTimeFrom(time : Date) {
        const diff = this.time.getTime() - time.getTime()
        console.log(diff)
        return Math.max(0, diff)
    }


    static serialize(alarm : Alarm) {
        return { time : alarm.time.getTime(), id : { value : alarm.id.value }, status : alarm.state }
    }

    static deserialize(serialized : SerializedAlarm) {
        return new Alarm(new AlarmId(serialized.id.value), new Date(serialized.time), serialized.status as AlarmState)
    }
}