import { IChat } from "../../types/chats";
import classes from "./ChatItem.module.css";

interface ChatItemProps {
  chat: IChat;
}

export const ChatItem: React.FC<ChatItemProps> = ({ chat }) => {
  return (
    <li className={classes.chatItem}>
      <div
        className={classes.chatImage}
        style={{ backgroundImage: `url(${chat.image})` }}
      ></div>
      <div className={classes.chatInfo}>
        <div className={classes.chatTitle}>
          <h3 className={classes.chatAuthor}>{chat.name}</h3>
          <span className={`${classes.chatDate} ${classes.chatSubtext}`}>
            {chat.date}
          </span>
        </div>
        <p className={classes.chatText}>
          {chat.last.fromMe ? (
            <span className={classes.chatSubtext}>You: </span>
          ) : null}
          {chat.last.text}
        </p>
      </div>
    </li>
  );
};
