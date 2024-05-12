import { Alarm } from "../../domain/alarm";
import { TestLocalAlarmProvider } from "../../infrastructure/alarm-provider-test-env";
import { AlarmProvider } from "../provider/alarm-provider";
import { AddAlarmCommand, AddAlarmCommandHandler } from "./add-alarm-command-handler";

describe('add alarm', () => {
    let stored: Alarm[] = [];
    let alarmProvider: AlarmProvider
    let handler: AddAlarmCommandHandler
    beforeEach(() => {
        alarmProvider = new TestLocalAlarmProvider(stored);
        handler = new AddAlarmCommandHandler(alarmProvider);
    })

    it('should add alarm', async () => {
        const command = new AddAlarmCommand(new Date());

        await handler.handle(command);

        await alarmProvider.getAlarms();
        expect(stored[0]).toBeInstanceOf(Alarm)
    });

})