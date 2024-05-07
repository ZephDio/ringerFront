import { AddAlarmCommandHandler } from '../ringer/applicative/commands/add-alarm-command-handler';
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { AlarmWatcher } from './watcher/alarm-watcher';

const alarmSlice = createSlice({
  name: 'alarms',
  initialState: {
    value: [] as number[]
  },
  reducers: {
    updated: (state, action) => {
        console.log("updated", state, action)
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
    alarmWatcher: null as null | AlarmWatcher
}
