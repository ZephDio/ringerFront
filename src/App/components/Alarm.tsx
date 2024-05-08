import { Alarm } from "../../ringer/domain/alarm";
import { useEffect, useState } from "react";

export const AlarmLine = (props: { alarm: Alarm }) => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [time])

    const getRemainingTimeVisual = () => {
        const diff = props.alarm.time.getTime() - time.getTime()
        if(diff < 0) return "Passed"
        const diffDate = new Date(diff)
        const hours = diffDate.getUTCHours()
        const minutes = diffDate.getUTCMinutes().toString().padStart(2, '0')
        const seconds = diffDate.getUTCSeconds().toString().padStart(2, '0')
        return `${hours}:${minutes}:${seconds}`
    }


    return <div className="flex flex-row justify-center">
        <p className="text-center mr-3">{props.alarm.time.toLocaleString()}</p>
        <p>{getRemainingTimeVisual()}</p>
    </div>
}