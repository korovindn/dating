import { ReactNode } from "react";
import classes from "./PageContainer.module.css";

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};
