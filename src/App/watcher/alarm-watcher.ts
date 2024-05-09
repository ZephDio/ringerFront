import { GetAlarmsQuery, GetAlarmsQueryHandler } from "../../ringer/applicative/queries/get-alarms-query-handler";
import { Alarm } from "../../ringer/domain/alarm";
import { alarmsStore } from "../state";


export class AlarmWatcher{  
    interval = null as null | ReturnType<typeof setInterval>;
    constructor(public rate: number = 3000,public getAlarmsQueryHandler : GetAlarmsQueryHandler) {}
    //dispatch = useDispatch();
    previousHash : string = ''
    async refresh(){
        const alarms = await this.getAlarmsQueryHandler.handle(new GetAlarmsQuery());
        const serialized = alarms.map((alarm) => Alarm.serialize(alarm));
        const hash = this.getHash(alarms)
        if(hash === this.previousHash) return
        alarmsStore.dispatch({type: "alarms/updated", payload: serialized})
        this.previousHash = hash
    }

    private getHash(alarms: Alarm[]){
        return alarms.map(alarm => alarm.id.value + alarm.state).join()
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