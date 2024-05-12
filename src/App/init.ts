import { AcknowledgeAlarmCommandHandler } from "../ringer/applicative/commands/acknowledge-alarm-command-handler";
import { AddAlarmCommandHandler } from "../ringer/applicative/commands/add-alarm-command-handler";
import { GetAlarmsQueryHandler } from "../ringer/applicative/queries/get-alarms-query-handler";
import { ApiAlarmProvider } from "../ringer/infrastructure/api-alarm-provider";
import { LocalAlarmProvider } from "../ringer/infrastructure/local-alarm-provider";
import { state } from "./state";
import { AlarmWatcher } from "./watcher/alarm-watcher";



export function initApp() {
    //const alarmProvider = new LocalAlarmProvider();
    const alarmProvider = new ApiAlarmProvider();
    const getAlarmsQueryHandler = new GetAlarmsQueryHandler(alarmProvider);
    const alarmWatcher = new AlarmWatcher(3000, getAlarmsQueryHandler);
    const acknowledgeAlarmCommandHandler = new AcknowledgeAlarmCommandHandler(alarmProvider);

    state.alarmWatcher = alarmWatcher;
    alarmWatcher.watch();

    const addAlarmCommandHandler = new AddAlarmCommandHandler(alarmProvider);
    state.addAlarmCommandHandler = addAlarmCommandHandler;
    state.acknowledgeAlarmCommandHandler = acknowledgeAlarmCommandHandler;

}