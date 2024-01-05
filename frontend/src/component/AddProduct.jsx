import { useState } from "react"

function AddProduct(){
    const [picture,setPicture]=useState("")
    const [name,setname]=useState("")
    const [category,setCategory]=useState("")
    const [gender,setGender]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDiscription]=useState("")



    async function handlePostData(e){
        e.preventDefault()
        let obj={picture,name,category,gender,price}
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
        <input type="text" placeholder="Enter Picture" value={picture}  onChange={(e)=>setPicture(e.target.value)} />
        <input type="text" placeholder="Name" value={name}   onChange={(e)=>setname(e.target.value)}  />
        <input type="text" placeholder="category" value={category} onChange={(e)=>setCategory(e.target.value)}  />
        <input type="text" placeholder="gender" value={gender}  onChange={(e)=>setGender(e.target.value)} />
        <input type="number" placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <input type="text" placeholder="Discription" value={description} onChange={(e)=>setDiscription(e.target.value)} />
        <input type="submit" value={"Submit"}    />
       </form>
        </>
    ) 
}
export default AddProduct