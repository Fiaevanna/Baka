import HomePageImgMale from "../assets/images/Person1klar/homepic1.png";
import HomePageImgFemale from "../assets/images/Person7/desertsandhoodie3.png";
import HomeStyle from './Home.module.css'
const Home = () => {
  return (
    <>
      
      <div className={HomeStyle.divPic}>
        <img src={HomePageImgMale} />
        <img src={HomePageImgFemale} />
      </div>
    </>
  );
};

export default Home;
