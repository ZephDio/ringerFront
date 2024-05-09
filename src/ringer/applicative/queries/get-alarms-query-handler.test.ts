import { Alarm, AlarmId, AlarmState, AudioWrapper } from "../../domain/alarm";
import { TestLocalAlarmProvider } from "../../infrastructure/alarm-provider-test";
import { AlarmProvider } from "../provider/alarm-provider";
import { GetAlarmsQuery, GetAlarmsQueryHandler } from "./get-alarms-query-handler";

describe('get alarms', () => {
    let stored = [new Alarm(new AlarmId('1'), new Date(), AlarmState.PENDING, new AudioWrapper(null))];
    let alarmProvider: AlarmProvider
    let handler : GetAlarmsQueryHandler
    beforeEach(() => {
        alarmProvider = new TestLocalAlarmProvider(stored);
        handler = new GetAlarmsQueryHandler(alarmProvider);
    })

    it('should acknowledge alarm', async () => {
        const query = new GetAlarmsQuery();

        await handler.handle(query);

        await alarmProvider.getAlarms();
        expect(stored[0]).toBeInstanceOf(Alarm)
    });

})