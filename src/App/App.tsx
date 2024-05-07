import { Alarms } from "./components/Alarms"
import { Clock } from "./components/Clock"


export const App = () => {
  return (
      <div className="flex flex-col justify-around">
        <Clock/>
        <Alarms/>
      </div>
  )
}
