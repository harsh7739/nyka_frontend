import { useState } from "react"

function PasswordStrenght(){
    const [pass,setPass] = useState("")
    
    return (
        <>
        <h1 style={{color:pass.length<6 ? "red" : pass.length>6&&pass.length<9?"orange":pass.length>10&&pass.length<13?"yellow":"green"}}>{pass}</h1>
        <input type="text" placeholder="Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)} />
       
        </>
    )
}
export default PasswordStrenght