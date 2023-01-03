import { Controlls } from "./Controlls";
import classes from "./Profile.module.css";

interface ProfileProps {}

const user = {
  id: 0,
  name: "Ivan",
  age: 22,
  distance: 22,
  desc: "Hello!",
  images: [
    "https://for-male.ru/wp-content/uploads/2020/11/stilnyj-muzhchina.jpg",
    "https://avatars.mds.yandex.net/i?id=17665662f7052e7d86665c90833fa113_l-4824599-images-thumbs&n=27&h=384&w=480",
  ],
  interests: [
    { title: "Drawing", weight: 100 },
    { title: "Dogs", weight: 10 },
    { title: "Cats", weight: 10 },
    { title: "Guitar", weight: 50 },
    { title: "Rock", weight: 60 },
    { title: "Sex", weight: 10 },
  ],
};

export const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.userPic}
        style={{ backgroundImage: `url(${user.images[0]})` }}
      ></div>
      <div>
        <h1>
          {user.name}, {user.age}
        </h1>
      </div>
      <Controlls />
    </div>
  );
};
