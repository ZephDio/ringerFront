
import { AlarmLine } from "./Alarm";
import { AddAlarmForm } from "./AddAlarmForm";
import { AlarmSate } from "../state";
import { useSelector } from "react-redux";
import { Alarm } from "../../ringer/domain/alarm";

export const Alarms = () => {
    const alarmsTimes = useSelector((state : AlarmSate) => state.value)

    return <div className="container mx-auto border-double border-teal-600 rounded-3xl w-2/4 mt-12">
            <AddAlarmForm/>
            {alarmsTimes.map((alarmsTime, index) => {
                const alarm = new Alarm(new Date(alarmsTime))
             return <AlarmLine key={index} alarm={alarm}></AlarmLine>})
            }
        </div>
} 