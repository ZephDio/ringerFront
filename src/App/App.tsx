import { useSelector } from "react-redux"
import { Alarms } from "./components/Alarms"
import { Clock } from "./components/Clock"
import { AlarmSate } from "./state"
import { Alarm } from "../ringer/domain/alarm"


export const App = () => {
  const serializedAlarms = useSelector((state : AlarmSate) => state.value)
  const alarms = serializedAlarms.map((serializedAlarm) => {
    return Alarm.deserialize(serializedAlarm)
  })


  return (
      <div className="flex flex-col justify-around">
        <Clock/>
        <Alarms alarms={alarms}/>
      </div>
  )
}
