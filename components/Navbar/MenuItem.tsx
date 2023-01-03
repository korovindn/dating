import Link from "next/link";
import React, { ReactNode } from "react";
import classes from "./MenuItem.module.css";

export interface MenuItemProps {
  key: string;
  icon: ReactNode;
  label: string;
  url: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ icon, label, url }) => {
  return (
    <Link href={url} className={classes.menuItem}>
      {icon}
      <div className={classes.menuLabel}>{label}</div>
    </Link>
  );
};
