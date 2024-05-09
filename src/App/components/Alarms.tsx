
import { AlarmLine } from "./Alarm";
import { AddAlarmForm } from "./AddAlarmForm";
import { Alarm, AlarmState } from "../../ringer/domain/alarm";
import { useEffect, useState } from "react";

export type AlarmsProps = {
    alarms: Alarm[]
}


export const Alarms = (props : AlarmsProps) => {

    const [now, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        checkForAlarm(props.alarms)
        return () => clearInterval(interval)
    }, [now])


    const checkForAlarm = (alarms: Alarm[]) => {
        for (const alarm of alarms) {
            if (alarm.getRemainingTimeFrom(now) <= 0 && alarm.state === AlarmState.PENDING) {
                console.log("Alarm ring trigger")
                alarm.ring()
            }
        }
    }


    return <div className="container mx-auto border-double border-teal-600 rounded-3xl w-2/4 mt-12">
            <AddAlarmForm/>
            { props.alarms.map((alarm, index) => <AlarmLine key={index} alarm={alarm} time={now}></AlarmLine>) }
        </div>
} 