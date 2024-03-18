import React from "react";
import styles from "./section.module.scss";

type Props = {
  title?: string;
  variant?:
    | "profile"
    | "main"
    | "experience"
    | "skills"
    | "education"
    | "tools";
  children?: React.ReactNode;
};

export const Section: React.FC<Props> = ({
  title = "",
  variant = "profile",
  children,
}) => {
  return (
    <div className={`${styles.container}`}>
      {title && (
        <div
          className={`${styles.title} ${styles[variant === "profile" ? "profile" : "main"]}`}
        >
          {title}
        </div>
      )}
      <div className={`${styles.content} ${styles[title?.toLowerCase()]}`}>
        {children}
      </div>
    </div>
  );
};
