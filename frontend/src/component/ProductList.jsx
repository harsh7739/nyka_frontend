import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { useSearchParams } from "react-router-dom"
import { getProductAction } from "../redux/productRedux/action"

function ProductList(){
    // const [data,setData]= useState([])
    const dispatch = useDispatch()
    const products = useSelector((store)=>store.productReducer.products)
    const [searchParam] = useSearchParams()

    let paramObj = {
        params:{
            gender:searchParam.getAll("gender"),
            category:searchParam.getAll("category"),
            _order:searchParam.get("order"),
            _sort:searchParam.get("order") && "price"
        }
    }

    useEffect(()=>{
        dispatch(getProductAction(paramObj))
    },[searchParam])
    console.log(products)
    return(
        <DIV>
            <table>
                <thead>
                <tr>
                <th>PRODUCTS</th>
                <th>GENDER</th>
                <th>CATEGORY</th>
                <th>PRICE</th>
                <th>DESCRIPTION</th>
                <th>ACTION</th>
            </tr>
                </thead>
                <tbody>
                {
            products.map((item)=>(
                // <ProductCard key={item.id} {...item} />
                <tr>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.gender}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                </tr>
            ))
        }
                </tbody>
            </table>
       
        </DIV>
    )
}
export default ProductList
const DIV = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 15px;
`