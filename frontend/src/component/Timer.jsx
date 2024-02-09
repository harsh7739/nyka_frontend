import { useState } from "react"

function TimerFun(){
    const [time,setTime] = useState(0)
    
       let id
      
    function handleStart(){
       id =  setInterval(()=>{
           setTime((prev)=>prev+1)
        },1000)
    }

    function hanldPause(){
    clearInterval(id)

    }


    function handleReset(){
        setTime(0)
    }

    return(
        <>
        
        <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={hanldPause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default TimerFun