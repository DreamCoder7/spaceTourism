"use client";

import { CgMenuRight } from "@/app/constants";
import { ToggleProps } from "@/app/types";
import classes from "./Toggle.module.css";

function Toggle(props: ToggleProps) {
  const { isNavOpen, toggle } = props;

  return (
    <button onClick={toggle} className={classes.Toggle}>
      {isNavOpen ? null : <CgMenuRight className={classes.Icon} />}
    </button>
  );
}

export default Toggle;
