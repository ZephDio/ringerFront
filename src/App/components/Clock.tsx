

import { useEffect, useState } from "react"


export const Clock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [time])

    const toPretty = (time: Date) => {
        const hours = time.getHours()
        const minutes = time.getMinutes().toString().padStart(2, '0')
        const seconds = time.getSeconds().toString().padStart(2, '0')
        return `${hours}:${minutes}:${seconds}`
    }

    return (
        <div className="container mx-auto border-double border-teal-600 rounded-3xl w-1/6">
            <p className="text-center text-3xl">{toPretty(time)}</p>
        </div>
    )
}