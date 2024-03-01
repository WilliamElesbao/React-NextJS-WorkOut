/** @format */

import { useContext } from "react";
import styles from "../styles/components/Profile.module.css";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/williamelesbao.png" alt="William Elesbao" />
      <div>
        <strong>William Elesbão</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
