import { AlarmProvider } from "../applicative/provider/alarm-provider";
import { Alarm, AlarmId } from "../domain/alarm";

export class LocalAlarmProvider implements AlarmProvider{

    alarms: Alarm[] = [new Alarm(new AlarmId('1'),new Date()), new Alarm(new AlarmId('1'),new Date("2024-05-08T17:59"))];
    async getAlarms() {
        return this.alarms
    }
    async addAlarm(alarmTime: Date) {
       this.alarms.push(new Alarm(new AlarmId('1'),alarmTime));
    }

    async removeAlarm(alarm: Alarm){
       this.alarms = this.alarms.filter(a => a !== alarm);
    }
}