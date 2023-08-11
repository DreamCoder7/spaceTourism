import { ReactNode } from "react";
import { StaticImageData } from "next/image";
export interface ListItemProps {
  link: string;
  children: ReactNode;
  num: number;
  isActive: boolean;
}

export interface ToggleProps {
  toggle: () => void;
  isNavOpen: boolean;
}

export interface BackgroundProps {
  imgSrc: StaticImageData;
  imgAlt: string;
  children: ReactNode;
}
