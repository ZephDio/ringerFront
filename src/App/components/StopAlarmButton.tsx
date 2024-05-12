import { AcknowledgeAlarmCommand } from "../../ringer/applicative/commands/acknowledge-alarm-command-handler"
import { Alarm } from "../../ringer/domain/alarm"
import { state } from "../state"


export const StopAlarmButton = (props: { alarm: Alarm, refreshCallback: (refresh: boolean) => void }) => {

    const stopAlarm = async () => {
        props.alarm.acknowledge()
        if (!state.acknowledgeAlarmCommandHandler) throw new Error("state not initialized")
        await state.acknowledgeAlarmCommandHandler.handle(new AcknowledgeAlarmCommand(props.alarm.id))
        props.refreshCallback(true)
    }

    return <button className="bg-teal-700 hover:bg-teal-500 text-white rounded-lg leading-3 h-8" onClick={stopAlarm}>
        Stop
    </button>
}