import { ReactNode } from "react";

export interface ListItemProps {
  link: string;
  children: ReactNode;
}

export interface ToggleProps {
  toggle: () => void;
  isNavOpen: boolean;
}
