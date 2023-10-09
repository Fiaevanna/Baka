import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Root = () => {
  
  return (
    <>
      <div style={{ width: "800px", margin: "0 auto" }}>
        <Header />
        <Outlet />
        <Footer/>
      </div>
    </>
  );
};

export default Root;
