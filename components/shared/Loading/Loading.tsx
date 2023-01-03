import { Spin } from "antd";
import classes from "./Loading.module.css";

export const Loading: React.FC = () => {
  return (
    <div className={classes.loadingWrapper}>
      <Spin />
    </div>
  );
};
