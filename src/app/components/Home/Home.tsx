import { Nav, BackgroundImage } from "../shared/index";
import { HeaderData } from "../../constants/index";
import classes from "./Home.module.css";
import bgImg from "../../../../public/assets/Home/background-home-mobile.jpg";

function Home() {
  const { title, subTitle, introText } = HeaderData;

  return (
    <header
      className={classes.Header}
      style={{
        backgroundImage: `url(${bgImg.src})`,
      }}
    >
      <Nav />
      <div className={classes.Content}>
        <h1 className={classes.Title}>
          <span className={classes.SubTitle}>{subTitle}</span>
          {title}
        </h1>
        <p className={classes.IntroText}>{introText}</p>
        <button className={classes.Btn}>EXPLORE</button>
      </div>
    </header>
  );
}

export default Home;
