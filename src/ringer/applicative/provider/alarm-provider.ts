import { Alarm, AlarmId } from "../../domain/alarm";

export abstract class AlarmProvider {
    abstract getAlarms(): Promise<Alarm[]>
    abstract addAlarm(alarmTime: Date): Promise<void>
    abstract acknowledgeAlarm(alarmId: AlarmId): Promise<void>
}