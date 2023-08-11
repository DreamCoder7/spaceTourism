import Link from "next/link";

import { ListItemProps } from "@/app/types";
import classes from "./list-item.module.css";

function ListItem(props: ListItemProps) {
  const { link, children } = props;

  return (
    <li className={classes.ListItem}>
      <Link href={link} className={classes.Link}>
        {children}
      </Link>
    </li>
  );
}

export default ListItem;
