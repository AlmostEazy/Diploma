import React from "react";

import styles from "./quote.module.scss";

import leftQuotes from "./assets/left-quotes.svg";
import rightQuotes from "./assets/right-quotes.svg";

type Props = {
  text: string;
  author?: string;
};

export const Quote: React.FC<Props> = ({ text, author }) => (
  <div className={styles.container}>
    <div className={styles.text}>
      <img src={leftQuotes} alt={""} />
      <div className={styles.quote}>{text}</div>
      <img src={rightQuotes} alt={""} />
    </div>
    {author && <div className={styles.author}>{author}</div>}
  </div>
);
