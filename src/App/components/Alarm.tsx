import { useState } from "react";
import { Alarm, AlarmState } from "../../ringer/domain/alarm";
import { StopAlarmButton } from "./StopAlarmButton";

export const AlarmLine = (props: { alarm: Alarm, time: Date }) => {
    const [_, refresh] = useState(false);

    const getRemainingTimeVisual = () => {
        if (props.alarm.state === AlarmState.PENDING) {
            const remainingTime = props.alarm.getRemainingTimeFrom(props.time)
            return `Time remaining : ${toPrettyRemainingTime(new Date(remainingTime))}`
        }
        return props.alarm.state
    }

    const toPrettyAlarmTime = (time: Date) => {
        const hours = time.getHours().toString()
        const minutes = time.getMinutes().toString().padStart(2, '0')
        const seconds = time.getSeconds().toString().padStart(2, '0')
        return `${hours}:${minutes}:${seconds}`
    }

    const toPrettyRemainingTime = (time: Date) => {
        const hours = time.getUTCHours().toString()
        const minutes = time.getMinutes().toString().padStart(2, '0')
        const seconds = time.getSeconds().toString().padStart(2, '0')
        return `${hours}:${minutes}:${seconds}`
    }

    const visual = getRemainingTimeVisual()

    return <div className="flex flex-row justify-center items-center">
        <p className="text-center mr-3">{toPrettyAlarmTime(props.alarm.time)}</p>
        <p className="mr-4">{visual}</p>
        {visual === "Ringing" ? <StopAlarmButton alarm={props.alarm} refreshCallback={refresh} /> : <></>}
    </div>
}