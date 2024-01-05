import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import {
  Box,
  Heading,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Flex,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import right_arrow from "../Assets/arrow-right.jpg";
import ellipse from "../Assets/Ellipse 5.jpg";
import dots from "../Assets/dots.jpg";
import edit from "../Assets/edit.jpg";
import trash from "../Assets/trash.jpg";
import { getProductAction } from "../redux/productRedux/action";

const LatestOrder = () => {
  const textStyle = {
    width: "63px",
    height: "22px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "22px",
    color: "#555F7E",
  };

  const dispatch = useDispatch()
  const [searchParam] = useSearchParams()
  const products=useSelector((store)=>store.productReducer.products)

  let paramObj = {
    params:{
        name:searchParam.get("name"),
        gender:searchParam.getAll("gender"),
        category:searchParam.getAll("category"),
        _order:searchParam.get("order"),
        _sort:searchParam.get("order") && "price"
    }
}

useEffect(()=>{
  dispatch(getProductAction(paramObj))
},[searchParam])


async function handleDelete(id){
  try {
    let res=await fetch(`https://nyka-j1r0.onrender.com/api/products/${id}`,{
      method:"DELETE"
    })
    res=await res.json()
    console.log(res)
    dispatch(getProductAction(paramObj))
  } catch (error) {
    console.log(error)
  }
}
const navigate=useNavigate()

function handleEdit(id){
navigate(`/product/${id}`)
}


  return (
    <Box
      id="Latest-Order"
      position="absolute"
      width="1216px"
      height="830px"
      mt="354px"
      ml="263px"
      borderRadius="16px"
      bg="white"
      boxShadow="0px 8px 32px 0px #3326AE14"
    >
      <Heading
        as="h2"
        w="131px"
        h="30px"
        position="absolute"
        top="32px"
        left="32px"
        fontFamily="Inter"
        fontWeight="500"
        fontSize="20px"
        lineHeight="30px"
      >
        Latest Orders
      </Heading>
      <Box
        w="63px"
        h="22px"
        position="absolute"
        left="1121px"
        top="36px"
        display="flex"
      >
        <Text
          w="35px"
          h="22px"
          fontFamily="Inter"
          fontWeight="600"
          fontSize="14px"
          lineHeight="22px"
          textAlign="right"
        >
          More
        </Text>
        <Image
          w="16px"
          h="16px"
          position="absolute"
          top="4px"
          left="47px"
          src={right_arrow}
          alt="right_arrow"
        />
      </Box>

      <TableContainer
        width="1152px"
        position="absolute"
        top="94px"
        left="32px"
        borderRadius="8px 8px 0 0"
        color="#8E95A9"
      >
        <Table variant="simple">
          {/* <TableCaption>Latest Order</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Products</Th>
              <Th>Gender</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Description</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
             
          {
            products.map((item)=>(

           
               
           
            
            <Tr key={item._id}>
              
              <Td>
                <Flex align="center">
                  <img
                    style={{
                      width: "44px",
                      height: "44px",
                      marginRight: "8px",
                    }}
                    src={item.picture}
                    alt="ellipse"
                  />
                  {/* {item.name} */}
                  <Text {...textStyle}>{item.name}</Text>
                </Flex>
              </Td>
              <Td>
                <Text {...textStyle}>{item.gender}</Text>
              </Td>
              <Td>
                <Text {...textStyle}>{item.category}</Text>
              </Td>
              <Td>
                <Text {...textStyle}>{item.price}</Text>
              </Td>
              <Td>
                <Text>{item.description}</Text>
              </Td>
              <Td>
                <Box w="80px" h="16px" marginTop="24px">
                  <Flex align="center" gap="16px">
                    <Link to={`/product/${item._id}`}>
                    <img src={edit} alt="edit" onClick={()=>handleEdit(item._id)}/>
                    </Link>
                    <img src={trash} alt="trash" onClick={()=>handleDelete(item._id)} />
                    <img src={dots} alt="dots" />
                  </Flex>
                </Box>
              </Td>
            </Tr>
          ))
        }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LatestOrder;

/*
Width
Hug (80px)
Height
Hug (16px)
Top
24px
Left
1032px
Gap
16px
*/
