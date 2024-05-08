import {TimeInput} from "@nextui-org/date-input";
import { useState } from "react";
import { AddAlarmCommand } from "../../ringer/applicative/commands/add-alarm-command-handler";
import { state } from "../state";
export const AddAlarmForm = () => {

    const [time, setTime] = useState(new Date())

    const onChange = (value : { hour : number , minute : number}) => {
        const date = new Date();
        date.setHours(value.hour);
        date.setMinutes(value.minute);
        date.setSeconds(0);
        if(date.getTime() < Date.now()){
            date.setDate(date.getDate() + 1);
        }
        setTime(date);
    }

    const onSubmit = () => {
        if(!state.addAlarmCommandHandler) throw new Error("Add Alarm Command Handler is not initialized")
        state.addAlarmCommandHandler.handle(new AddAlarmCommand(time))
        state.alarmWatcher?.forceRefresh()
    }

    return (
        <div className="max-w-20 m-auto flex flex-col" >
            <p className="text-xs m-0 ml-3">Add Alarm</p>
            <TimeInput hourCycle={24} className="ml-5" aria-label="Add Alarm" onChange={onChange}/>
            <div className="bg-teal-700 text-center rounded-xl cursor-pointer" onClick={onSubmit}>
                Submit
            </div>
        </div>
    )
}