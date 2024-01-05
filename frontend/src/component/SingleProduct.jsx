import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"

function SingleProduct(){
    const {id} = useParams()
    const [data,setData] = useState({})


    async function fetchFun(){
        try {
            let res=await fetch(`https://nyka-j1r0.onrender.com/api/products/${id}`)
            res=await res.json()
            setData(res)
        } catch (error) {
            console.log(error)
        }
    }
useEffect(()=>{
    fetchFun()
},[])
    // const products = useSelector((store)=>store.productReducer.products)
    // useEffect(()=>{
    //   const product = products.find((item)=>item.id===+id)
    //   setData(product)
    // },[])
    // const {name,price,gender,category,picture} = data
    // console.log(data)
    return(
        <DIV>
        {/* <img src={data.picture} alt="Product-pic" /> */}
        <h3>{data.name}</h3>
        <h3></h3>
        <h4>{data.category}</h4>
        <p>Price:- ₹{data.price}</p>
        <h4>Gender:- {data.gender}</h4>

        </DIV>
    )
}
export default SingleProduct

const DIV = styled.div`
width: 35%;
margin: auto;
margin-top: 10px;
padding: 10px;
    border: 1px solid gray;
    font-style: italic;
    img{
        width: 100%;
    }
`