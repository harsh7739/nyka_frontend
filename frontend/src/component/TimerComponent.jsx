import { useEffect, useState } from "react"

function TimerComponent(){

    const [time,setTime] = useState( Date())

    useEffect(()=>{
        let timeinterval = setInterval(()=>{
         setTime((prev)=>Date())
        },1000)
        return ()=>{
            clearInterval(timeinterval)
        }
    })

    return (
        <>
        <h1>{time}</h1>
        </>
    )
}

export default TimerComponent