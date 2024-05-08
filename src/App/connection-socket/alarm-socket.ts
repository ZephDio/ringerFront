import { io } from "socket.io-client";

export class AlarmSocket {
 //   private ws: Socket<DefaultEventsMap, DefaultEventsMap>

    constructor() {
        const socket = io('http://localhost:3000');
        socket.on('connect', () => {
            console.log('connected')
        });
    }


}