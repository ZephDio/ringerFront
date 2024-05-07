import { AddAlarmCommandHandler } from "../ringer/applicative/commands/add-alarm-command-handler";
import { GetAlarmsQueryHandler } from "../ringer/applicative/queries/get-alarms-query";
import { LocalAlarmProvider } from "../ringer/infrastructure/local-alarm-provider";
import { state } from "./state";
import { AlarmWatcher } from "./watcher/alarm-watcher";



export function initApp(){
    const alarmProvider = new LocalAlarmProvider();
    const getAlarmsQueryHandler = new GetAlarmsQueryHandler(alarmProvider);
    const alarmWatcher = new AlarmWatcher(3000,getAlarmsQueryHandler);

    state.alarmWatcher = alarmWatcher;
    alarmWatcher.watch();

    const addAlarmCommandHandler = new AddAlarmCommandHandler(alarmProvider);
    state.addAlarmCommandHandler = addAlarmCommandHandler;
}