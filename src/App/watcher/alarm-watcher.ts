import { GetAlarmsQuery, GetAlarmsQueryHandler } from "../../ringer/applicative/queries/get-alarms-query";
import { alarmsStore } from "../state";


export class AlarmWatcher{  
    interval = null as null | ReturnType<typeof setInterval>;
    constructor(public rate: number = 3000,public getAlarmsQueryHandler : GetAlarmsQueryHandler) {}
    //dispatch = useDispatch();
    async refresh(){
        const alarms = await this.getAlarmsQueryHandler.handle(new GetAlarmsQuery());
        const serealized = alarms.map(alarm => alarm.time.getTime());
        alarmsStore.dispatch({type: "alarms/updated", payload: serealized})
    }
  
    watch() {
      this.refresh();
      this.interval = setInterval(async () => {
        this.refresh();
      }, this.rate);
    }
  
    async forceRefresh() {
      await this.refresh();
    }
}