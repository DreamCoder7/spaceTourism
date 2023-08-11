import Image from "next/image";

import classes from "./Logo.module.css";

function Logo() {
  return (
    <Image
      src="/assets/Shared/logo.svg"
      alt="SpaceTourism Logo"
      width={50}
      height={50}
      className={classes.Logo}
    />
  );
}

export default Logo;
