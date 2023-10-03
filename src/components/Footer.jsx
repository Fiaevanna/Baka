import FooterStyle from "./Footer.module.css";
import HiroshiImg from "../assets/images/hiroshi/nyhiroshi.png";
import Nav from './Nav'
const Footer = () => {
  return (
    <>
      <div className={FooterStyle.footerStructure}>
        <Nav/>
        <div className={FooterStyle.footerDivContentStructure}>
          <h1 className={FooterStyle.footerh1}>Clothes for “BAKA”</h1>
          <img className={FooterStyle.footerHiroshi} src={HiroshiImg} />
          <p>Copyright 2022 All Rights Reserved Company  Clothes For “Baka”</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
