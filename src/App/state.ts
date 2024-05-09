import { AddAlarmCommandHandler } from '../ringer/applicative/commands/add-alarm-command-handler';
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { AlarmWatcher } from './watcher/alarm-watcher';
import { AcknowledgeAlarmCommandHandler } from '../ringer/applicative/commands/acknowledge-alarm-command-handler';

export type SerializedAlarm = {
    time: number
    id: { value : string }
    status : string
}

const alarmSlice = createSlice({
  name: 'alarms',
  initialState: {
    value: [] as SerializedAlarm[]
  },
  reducers: {
    updated: (state, action) => {
        state.value = action.payload
    }
  }
})

export const { updated } = alarmSlice.actions

export const alarmsStore = configureStore({
    reducer: alarmSlice.reducer
})

export type AlarmSate = ReturnType<typeof alarmsStore.getState>
export type AlarmDispatch = typeof alarmsStore.dispatch


export const state = {
    alarmsStore: alarmsStore,
    addAlarmCommandHandler: null as null | AddAlarmCommandHandler,
    acknowledgeAlarmCommandHandler: null as null | AcknowledgeAlarmCommandHandler,
    alarmWatcher: null as null | AlarmWatcher
}
