import { useMemo } from "react";
import { IInterest } from "../../types/user";
import classes from "./Interests.module.css";

interface InterestsProps {
  interests: IInterest[];
}

export const Interests: React.FC<InterestsProps> = ({ interests }) => {
  const orderedInterests = useMemo(
    () => interests.sort((a, b) => b.weight - a.weight),
    [interests]
  );
  return (
    <div className={classes.interestsWrapper}>
      <ul className={classes.interests}>
        {orderedInterests.map((interest) => (
          <li
            style={{ opacity: 0.01 * interest.weight }}
            key={interest.title}
            className={classes.interestsItem}
          >
            {interest.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
