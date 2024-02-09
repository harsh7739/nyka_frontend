import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerFun } from "../redux/authRedux/action"
import { Input,Stack,InputGroup,InputRightElement,Button,Text } from '@chakra-ui/react'
import { ViewOffIcon,ViewIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"

function Signup(){

    const [name,setname] = useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [show, setShow] =useState(false)
    const handleClick = () => setShow(!show)

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
        {/* <form onSubmit={handleSubmit}>
           <input type="text" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)} />
           <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
           <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
           <input type="file" />
           <input type="submit" value={"Submit"} />
        </form> */}


<Stack spacing={3} w="40%" m="auto" >
<Input
  pr='4.5rem'
  type="text"
  placeholder='Enter Name'
  required="true"
  value={name}
  onChange={(e)=>setname(e.target.value)}
/>
{/* <label>User Email</label> */}
<Input
  pr='4.5rem'
  type="email"
  placeholder='Enter Email'
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
/>

<InputGroup size='md'>



<Input
  pr='4.5rem'
  type={show ? 'text' : 'password'}
  placeholder='Enter password'
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
/>
<InputRightElement width='4.5rem'>
  <Button h='1.75rem' size='sm' onClick={handleClick}>
    {show ?  <ViewOffIcon />:<ViewIcon />}
  </Button>
</InputRightElement>

</InputGroup>
<Button onClick={handleSubmit}>Register</Button>
<Text>Already have Account ?
  <Link to="/login">
  <span style={{color:"blue"}}> Login</span> 
  </Link>
  </Text>
</Stack>


        </>
    )
}
export default Signup