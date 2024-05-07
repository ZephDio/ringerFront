import { Alarm } from "../../domain/alarm";
import { AlarmProvider } from "../provider/alarm-provider"

export class AddAlarmCommand {
    constructor(public alarm: Alarm) {}
}

export class AddAlarmCommandHandler{
    constructor(private alarmProvider: AlarmProvider) {}

    async handle(command: AddAlarmCommand){
        await this.alarmProvider.addAlarm(command.alarm);
    }
}