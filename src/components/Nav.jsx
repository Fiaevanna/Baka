import { Link } from "react-router-dom";
import NavStyle from "./Nav.module.css";
const Nav = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px"}}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/aboutus"}>About us</Link>
        <Link to={"/reviews"}>Reviews</Link>
        <Link to={"/contactus"}>Contact us</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </>
  );
};

export default Nav;
