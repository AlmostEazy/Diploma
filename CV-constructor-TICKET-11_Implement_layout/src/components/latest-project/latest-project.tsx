import React from "react";

import project1 from "./assets/project1.svg";
import project2 from "./assets/project2.svg";

import styles from "./latest-project.module.scss";

type Props = {
  iconType?: string;
  iconLink?: string;
  title: string;
  description: string;
  link: string;
  skills: string[];
};

const iconMap: { [k: string]: string } = {
  project1: project1,
  project2: project2,
};

export const LatestProject: React.FC<Props> = ({
  iconType,
  iconLink,
  title,
  description,
  link,
  skills,
}) => {
  return (
    <div className={styles.container}>
      <img src={iconLink || iconMap[iconType?.toLowerCase() || ""]} alt={""} />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <a href={link}>{link}</a>
    </div>
  );
};
