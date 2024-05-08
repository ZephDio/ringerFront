import { AlarmProvider } from "../provider/alarm-provider"

export class AddAlarmCommand {
    constructor(public alarmTime: Date) {}
}

export class AddAlarmCommandHandler{
    constructor(private alarmProvider: AlarmProvider) {}

    async handle(command: AddAlarmCommand){
        await this.alarmProvider.addAlarm(command.alarmTime);
    }
}