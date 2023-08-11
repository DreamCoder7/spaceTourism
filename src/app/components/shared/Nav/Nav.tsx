"use client";
import { useState } from "react";

import ListItem from "./list-item";
import classes from "./Nav.module.css";
import { Logo, Toggle } from "../../UI";
import { RiCloseFill } from "../../../constants/index";

function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let listClasses = isOpen
    ? [classes.List, classes.OpenMode].join(" ")
    : classes.List;

  const navToggleHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className={classes.Nav}>
      <Logo />
      <ul className={listClasses}>
        <button className={classes.CloseMNav} onClick={navToggleHandler}>
          <RiCloseFill className={classes.IconClose} />
        </button>

        <ListItem link="/" num={0} isActive={true}>
          HOME
        </ListItem>
        <ListItem link="/destination" num={1} isActive={false}>
          DESTINATION
        </ListItem>
        <ListItem link="/creq" num={2} isActive={false}>
          CREW
        </ListItem>
        <ListItem link="/technology" num={3} isActive={false}>
          TECHNOLOGY
        </ListItem>
      </ul>
      <Toggle isNavOpen={isOpen} toggle={navToggleHandler} />
    </nav>
  );
}

export default Nav;
