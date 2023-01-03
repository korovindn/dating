import { ReactNode } from "react";
import { Navbar } from "../Navbar/Navbar";
import classes from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.condiv}>{children}</div>
      <Navbar />
    </div>
  );
};
