import Image from "next/image";
import LogoImg from "../../../assets/Shared/logo.svg";

import classes from "./Logo.module.css";

function Logo() {
  return (
    <Image
      src={LogoImg}
      alt="SpaceTourism Logo"
      width={50}
      height={50}
      className={classes.Logo}
    />
  );
}

export default Logo;
