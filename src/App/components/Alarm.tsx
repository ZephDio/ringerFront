import { Alarm } from "../../ringer/domain/alarm";

export const AlarmLine = (props: { alarm: Alarm }) => {
    const diff = props.alarm.time.getTime() - new Date().getTime()
    const diffDate = new Date(diff)
    const hours = diffDate.getUTCHours()
    const minutes = diffDate.getUTCMinutes()
    const seconds = diffDate.getUTCSeconds()

    return <div className="flex flex-row justify-center">
        <p className="text-center mr-3">{props.alarm.time.toLocaleString()}</p>
        <p>{`${hours}:${minutes}:${seconds}`}</p>
    </div>
}