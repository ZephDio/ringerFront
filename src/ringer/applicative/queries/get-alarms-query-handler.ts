import { AlarmProvider } from "../provider/alarm-provider"


export class GetAlarmsQuery {}

export class GetAlarmsQueryHandler {
  constructor(public provider : AlarmProvider) {}

  async handle(_query: GetAlarmsQuery) {
    return await this.provider.getAlarms();
  }
}