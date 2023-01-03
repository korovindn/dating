import classes from "./Controlls.module.css";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

interface ControllsProps {
  onLike: (id: number) => void;
  onDislike: (id: number) => void;
  id: number;
}

export const Controlls: React.FC<ControllsProps> = ({
  onDislike,
  onLike,
  id,
}) => {
  return (
    <div className={classes.controllsWrapper}>
      <button className={classes.controllsButton} onClick={() => onDislike(id)}>
        <DislikeOutlined />
      </button>
      <button className={classes.controllsButton} onClick={() => onLike(id)}>
        <LikeOutlined />
      </button>
    </div>
  );
};
