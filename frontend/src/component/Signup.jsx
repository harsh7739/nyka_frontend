import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerFun } from "../redux/authRedux/action"

function Signup(){

    const [name,setname] = useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const dispatch=useDispatch()


    const handleSubmit=(e)=>{
        e.preventDefault()
        let obj={name,email,password}
        dispatch(registerFun(obj))
    }


    // async function handleSubmit(e){
    //     e.preventDefault()
    //     let obj={name,email,password}
    //     try {
    //         let res=await fetch("http://localhost:8080/api/users/register",{
    //             method:"POST",
    //             headers:{
    //                 "Content-Type":"application/json"
    //             },
    //             body:JSON.stringify(obj)
    //         })
    //         res=await res.json()
    //         console.log(res)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <>
        <form onSubmit={handleSubmit}>
           <input type="text" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)} />
           <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
           <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
           <input type="file" />
           <input type="submit" value={"Submit"} />
        </form>
        </>
    )
}
export default Signup