import { AlarmProvider } from "../applicative/provider/alarm-provider";
import { Alarm, AlarmId } from "../domain/alarm";


export class LocalAlarmProvider implements AlarmProvider{

    constructor(public alarms : Alarm[] = []){}

    async getAlarms() {
        return this.alarms
    }
    async addAlarm(alarmTime: Date) {
       this.alarms.push(new Alarm(new AlarmId('1'),alarmTime));
    }

    async acknowledgeAlarm(alarmId: AlarmId){
        const alarm = this.alarms.find(alarm => alarm.id.value === alarmId.value)
        if(!alarm) throw new Error('Alarm not found exception');
        alarm.acknowledge();
    }
}