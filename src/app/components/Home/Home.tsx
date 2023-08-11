import { Nav } from "../shared/index";
import { HeaderData } from "../../constants/index";
import classes from "./Home.module.css";

function Home() {
  const { title, subTitle, introText } = HeaderData;

  return (
    <header className={classes.Header}>
      <Nav />
      <h1 className={classes.Title}>
        <span className={classes.SubTitle}>{subTitle}</span>
        {title}
      </h1>
      <p className={classes.IntroText}>{introText}</p>
      <button className={classes.Btn}>EXPLORE</button>
    </header>
  );
}

export default Home;
