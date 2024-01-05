import { Link } from "react-router-dom"

function Navbar(){
    return (
        <>
        <Link to={"/register"}>Signup</Link>
        <Link to={"login"}>Login</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/analytics"}>Analytics</Link>
        </>
    )
}
export default Navbar