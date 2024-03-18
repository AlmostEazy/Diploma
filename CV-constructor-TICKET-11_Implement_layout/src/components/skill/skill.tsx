import React from "react";

import styles from "./skill.module.scss";

type Props = {
  skill: string | string[];
};

export const Skill: React.FC<Props> = ({ skill }) => {
  const isArray = Array.isArray(skill);

  return (
    <div className={styles.container}>
      <div className={`${styles.skill} ${styles.variant1}`}>
        {isArray ? (
          skill.length > 1 ? (
            <div className={styles.list}>
              {skill.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </div>
          ) : (
            <div className={styles.divided}>
              {skill[0].split(";").map((el) => {
                return <div key={el}>{el}</div>;
              })}
            </div>
          )
        ) : (
          skill
        )}
      </div>
    </div>
  );
};
