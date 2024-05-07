import { Alarm } from "../../domain/alarm";

export abstract class AlarmProvider {
    abstract getAlarms(): Promise<Alarm[]>
    abstract addAlarm(alarm: Alarm): Promise<void>
    abstract removeAlarm(alarm: Alarm): Promise<void>
}