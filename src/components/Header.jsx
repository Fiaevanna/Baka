import HeaderImg from "../assets/images/headerprofil/sssss.jpg";
import Nav from "./Nav";
import HiroshiImg from "../assets/images/hiroshi/nyhiroshi.png";
import HeadingStyle from "./Header.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Header = () => {
  let location = useLocation();
  let showCtaBtn = location.pathname === "/";

  return (
    <>
      <header>
        <div className={HeadingStyle.headerContent}>
          <Nav />

          <h1>Clothes for “BAKA”</h1>
          <img className={HeadingStyle.hiroshi} src={HiroshiImg} />
          {showCtaBtn && (
            <Link to={"/products"}>
              <button className={HeadingStyle.button}>Get Yours Now!</button>
            </Link>
          )}
        </div>
        <img className={HeadingStyle.headerBackgroundImage} src={HeaderImg} />
      </header>
    </>
  );
};
export default Header;
