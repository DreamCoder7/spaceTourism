"use client";
import ListItem from "./list-item";
import classes from "./Nav.module.css";
import { Logo, Toggle } from "../../UI";

function Nav() {
  const navToggleHandler = () => {};

  return (
    <nav className={classes.Nav}>
      <Logo />
      <ul className={classes.List}>
        <ListItem link="/">Home</ListItem>
      </ul>
      <Toggle isNavOpen={false} toggle={navToggleHandler} />
    </nav>
  );
}

export default Nav;
