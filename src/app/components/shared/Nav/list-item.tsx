import Link from "next/link";

import { ListItemProps } from "@/app/types";
import classes from "./list-item.module.css";

function ListItem(props: ListItemProps) {
  const { link, children, num, isActive } = props;

  const itemClasses = isActive
    ? [classes.Active, classes.ListItem].join(" ")
    : classes.ListItem;

  return (
    <li className={itemClasses}>
      <Link href={link} className={classes.Link}>
        <span className={classes.Num}>0{num}</span>
        {children}
      </Link>
    </li>
  );
}

export default ListItem;
