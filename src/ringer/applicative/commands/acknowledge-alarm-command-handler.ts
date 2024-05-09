import { AlarmId } from "../../domain/alarm";
import { AlarmProvider } from "../provider/alarm-provider";

export class AcknowledgeAlarmCommand {
    constructor(public alarmId: AlarmId) {}
}

export class AcknowledgeAlarmCommandHandler{
    constructor(private alarmProvider: AlarmProvider){
    }
    async handle(command: AcknowledgeAlarmCommand){
        await this.alarmProvider.acknowledgeAlarm(command.alarmId);
    }
}