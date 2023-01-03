import { SettingOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import classes from "./Controlls.module.css";

export const Controlls: React.FC = () => {
  return (
    <div className={classes.controllsWrapper}>
      <Link href="/settings" className={classes.controllsButton}>
        <SettingOutlined />
      </Link>
      <Link href="/edit" className={classes.controllsButton}>
        <EditOutlined />
      </Link>
    </div>
  );
};
