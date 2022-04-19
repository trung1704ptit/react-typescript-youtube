import { useRef, useEffect, useState } from "react";

export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (interValRef.current) {
            window.clearInterval(interValRef.current)
        }
    }

    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>
            Timer is now: {timer}
            <button onClick={() => stopTimer()}>Stop timer</button>
        </div>
    )
}