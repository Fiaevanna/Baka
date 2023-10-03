import HeaderImg from "../assets/images/headerprofil/sssss.jpg";
import Nav from "./Nav";
import HiroshiImg from "../assets/images/hiroshi/nyhiroshi.png";
import HeadingStyle from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <div className={HeadingStyle.headerContent}>
          <Nav />

          <h1>Clothes for “BAKA”</h1>
          <img className={HeadingStyle.hiroshi} src={HiroshiImg}/>
          <button>Get Yours Now!</button>
        </div>
        <img className={HeadingStyle.headerBackgroundImage} src={HeaderImg} />
      </header>
    </>
  );
};
export default Header;
