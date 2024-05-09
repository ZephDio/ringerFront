import { Alarm, AlarmId, AlarmState, AudioWrapper } from "../../domain/alarm";
import { TestLocalAlarmProvider } from "../../infrastructure/alarm-provider-test";
import { AlarmProvider } from "../provider/alarm-provider";
import { AcknowledgeAlarmCommand, AcknowledgeAlarmCommandHandler } from "./acknowledge-alarm-command-handler";

describe('acknowledge alarm', () => {
    let stored = [new Alarm(new AlarmId('1'), new Date(), AlarmState.PENDING, new AudioWrapper(null))];
    let alarmProvider: AlarmProvider
    let handler : AcknowledgeAlarmCommandHandler
    beforeEach(() => {
        alarmProvider = new TestLocalAlarmProvider(stored);
        handler = new AcknowledgeAlarmCommandHandler(alarmProvider);
    })

    it('should acknowledge alarm', async () => {
        const command = new AcknowledgeAlarmCommand(new AlarmId('1'));

        await handler.handle(command);

        await alarmProvider.getAlarms();
        expect(stored[0].state).toBe(AlarmState.PASSED)
    });

    it('should throw error when alarm is not found', async () => {
        const command = new AcknowledgeAlarmCommand(new AlarmId('2'));
        expect(() => handler.handle(command)).rejects.toThrow('Alarm not found exception')
    });
})