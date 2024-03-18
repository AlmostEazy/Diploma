import React from "react";

import course from "./assets/course.svg";
import ux from "./assets/ux.svg";
import memo from "./assets/memo.svg";
import gb from "./assets/gb.svg";

import styles from "./education.module.scss";

export type iconType = "course" | "ux" | "memo";

type Props = {
  iconType?: iconType;
  iconLink?: string;
  title: string;
  description: string;
  date: string;
};

const iconMap: { [k: string]: string } = {
  course: course,
  ux: ux,
  memo: memo,
  gb: gb,
};

export const Education: React.FC<Props> = ({
  iconType = "",
  iconLink,
  title,
  description,
  date,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img src={iconLink || iconMap[iconType?.toLowerCase()]} alt={""} />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.description}>{description}</div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
};
