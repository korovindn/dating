import Link from "next/link";
import { ChatItem } from "./ChatItem";
import classes from "./ChatsList.module.css";

const chats = [
  {
    id: 0,
    name: "Tanya",
    image: "https://ilounge.ua/files/managers/tanya-garbaruk.jpg",
    last: { text: "Hello! How are you?", fromMe: false },
    date: "02.01.2023, 12:00",
  },
  {
    id: 1,
    name: "Dima",
    image:
      "https://img.freepik.com/premium-photo/portrait-of-charming-young-man-standing-against-on-white-background_23-2148213403.jpg",
    last: { text: "Hey, sex?", fromMe: false },
    date: "02.01.2023, 12:00",
  },
  {
    id: 2,
    name: "Marina",
    image: "https://vhod.ru/img/misc/woman-curly.jpg",
    last: { text: "I'm fine", fromMe: true },
    date: "02.01.2023, 12:00",
  },
  {
    id: 3,
    name: "Marina",
    image: "https://vhod.ru/img/misc/woman-curly.jpg",
    last: { text: "Very very very long message from dushnila", fromMe: true },
    date: "02.01.2023, 12:00",
  },
];

export const ChatsList: React.FC = () => {
  return (
    <ul className={classes.chatsList}>
      {chats.map((chat) => (
        <Link href={`/chats/${chat.id}`}><ChatItem chat={chat} /></Link>
      ))}
    </ul>
  );
};
