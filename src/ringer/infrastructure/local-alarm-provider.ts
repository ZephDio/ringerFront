import { AlarmProvider } from "../applicative/provider/alarm-provider";
import { Alarm } from "../domain/alarm";

export class LocalAlarmProvider implements AlarmProvider{

    alarms: Alarm[] = [new Alarm(new Date()), new Alarm(new Date()), new Alarm(new Date())];
    async getAlarms() {
        return this.alarms
    }
    async addAlarm(alarm: Alarm) {
       this.alarms.push(alarm);
    }
    async removeAlarm(alarm: Alarm){
       this.alarms = this.alarms.filter(a => a !== alarm);
    }
}