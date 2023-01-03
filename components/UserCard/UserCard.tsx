import { useEffect, useState } from "react";
import { IUser } from "../../types/user";
import { Loading } from "../shared/Loading/Loading";
import { Controlls } from "./Controlls";
import { Interests } from "./Interests";
import { dislike, like, getUser } from "../../services/UserCard/apiService";
import classes from "./UserCard.module.css";

export const UserCard: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    getUser().then((res) => setUser(res));
  }, []);
  return (
    <div className={classes.userCardWrapper}>
      <div
        className={classes.userCard}
        style={{
          backgroundImage: user
            ? `url(${user.images[currentImage] ?? ""})`
            : undefined,
        }}
      >
        {user ? (
          <>
            <button
              className={`${classes.invisibleButton} ${classes.invisibleButtonLeft}`}
              onClick={() =>
                currentImage > 0 ? setCurrentImage(currentImage - 1) : undefined
              }
            ></button>
            <button
              className={`${classes.invisibleButton} ${classes.invisibleButtonRight}`}
              onClick={() =>
                currentImage < user.images.length - 1
                  ? setCurrentImage(currentImage + 1)
                  : undefined
              }
            ></button>
            <div className={classes.userCardInfo}>
              <h1>
                {user.name}, {user.age}
              </h1>
              <h3>{user.distance} km</h3>
              <p>{user.desc}</p>
              <Interests interests={user.interests} />
              <Controlls onLike={like} onDislike={dislike} id={user.id} />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
