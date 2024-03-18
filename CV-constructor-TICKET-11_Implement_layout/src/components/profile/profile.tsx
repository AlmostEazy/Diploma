import React from "react";

import styles from "./profile.module.scss";
import { Quote } from "./Quote/quote";

type Props = {
  photoLink: string;
  name: string;
  speciality: string;
  quoteText?: string;
  quoteAuthor?: string;
};

export const Profile: React.FC<Props> = ({
  name,
  speciality,
  photoLink,
  quoteText,
  quoteAuthor,
}) => {
  return (
    <div className={styles.container}>
      <img src={photoLink} alt={""} />
      <div className={styles.name}>{name}</div>
      <div className={styles.speciality}>{speciality}</div>
      {quoteText && <Quote text={quoteText} author={quoteAuthor} />}
    </div>
  );
};
