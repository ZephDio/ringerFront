import { AlarmProvider } from "../applicative/provider/alarm-provider";
import { Alarm, AlarmId, AlarmState } from "../domain/alarm";

type AlarmDTO = {
    id: { value: string },
    time: string,
    acknowledged: boolean
}

export class ApiAlarmProvider implements AlarmProvider{

    async getAlarms() {
        const response =  await fetch('http://localhost:3000/alarms/watchable')
        const alarms = await response.json();
        return alarms.map((alarm: AlarmDTO) => new Alarm(new AlarmId(alarm.id.value), new Date(alarm.time), alarm.acknowledged ?  AlarmState.PASSED : AlarmState.PENDING ))
    }

    async addAlarm(alarmTime: Date) {
        await fetch('http://localhost:3000/alarms/create', { method: 'POST', body: JSON.stringify({alarmTime}), headers: { 'Content-Type': 'application/json' }})
    }

    async acknowledgeAlarm(alarmId: AlarmId){
        const response = await fetch(`http://localhost:3000/alarms/acknowledge/${alarmId.value}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }})
        if(response.status === 404) throw new Error('Alarm not found exception')
    }
}