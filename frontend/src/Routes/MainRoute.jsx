import { Route, Routes } from "react-router-dom"
import Signup from "../component/Signup"
import Login from "../component/Login"
import Dashboard from "../component/Dashboard"
import Analytics from "../component/Analytics"
import SingleProduct from "../component/SingleProduct"
import AddProduct from "../component/AddProduct"
import MainContainer from "../component/MainContainer"


function MainRoute(){

    return (
        <>
        <Routes>

     <Route path="/register" element={<Signup />}></Route>
     <Route path="/login" element={<Login />} />
     <Route path="/dashboard" element={<MainContainer />} />
     <Route path="/analytics" element={<Analytics />} />
     <Route path="/product/:id" element={<SingleProduct />}></Route>
     <Route path="/add" element={<AddProduct />}></Route>
        </Routes>
        </>
    )
}
export default MainRoute