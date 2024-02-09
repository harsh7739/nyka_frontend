import { useState } from "react"
import { Flex, Spacer, Stack,Input,Select  } from '@chakra-ui/react'
import { PhoneIcon, AttachmentIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

function AddProduct(){
    const [picture,setPicture]=useState("")
    const [name,setname]=useState("")
    const [category,setCategory]=useState("")
    const [gender,setGender]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDiscription]=useState("")



    async function handlePostData(e){
        e.preventDefault()
        let obj={picture,name,category,gender,price,description}
        try {
            let res=await fetch("https://nyka-j1r0.onrender.com/api/products",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
            })
            res=await res.json()
            console.log(res)
            alert(res.message)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
       <form onSubmit={handlePostData}>
       <Stack spacing={3} w="40%" m="auto" >
        <Input type="text" placeholder="Enter Picture" value={picture}  onChange={(e)=>setPicture(e.target.value)} />
       
        <Input type="text" placeholder="Name" value={name}   onChange={(e)=>setname(e.target.value)}  />
       
       
        <Input type="text" placeholder="Discription" value={description} onChange={(e)=>setDiscription(e.target.value)} />
       
        <Select  value={category} placeholder='Select option' onChange={(e)=>setCategory(e.target.value)} >
            <option value="makeup">makeup</option>
            <option value="haircare">Haircare</option>
            <option value="skincare">Skincare</option>
        </Select >
       
        <Select placeholder='Select option'  value={gender} onChange={(e)=>setGender(e.target.value)} >
            <option value="male">Male</option>
            <option value="female">Female</option>
        </Select >
       
        <Input type="number" placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        
        <Input type="submit" value={"Submit"}    />
       
       </Stack>
       </form>
        </>
    ) 
}
export default AddProduct