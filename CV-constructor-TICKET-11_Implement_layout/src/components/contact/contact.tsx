import React from "react";
import email from "./assets/contacts/email.svg";
import link from "./assets/contacts/link.svg";
import linkedin from "./assets/socials/linkedin.svg";
import address from "./assets/contacts/address.svg";
import dribble from "./assets/socials/dribble.svg";
import instagram from "./assets/socials/instagram.svg";
import phone from "./assets/contacts/phone.svg";
import twitter from "./assets/socials/twitter.svg";
import italy from "./assets/flags/italy.svg";
import gb from "./assets/flags/gb.svg";
import greek from "./assets/flags/greek.svg";
import spain from "./assets/flags/spain.svg";

import styles from "./contact.module.scss";

export type iconType =
  | "email"
  | "link"
  | "linkedin"
  | "address"
  | "dribble"
  | "instagram"
  | "phone"
  | "twitter"
  | "it"
  | "gb"
  | "gr"
  | "es";

type Props = {
  title: string;
  link?: string;
  variant?: "contacts" | "socials" | "languages";
  subtitle?: string;
  iconType?: iconType;
  iconLink?: string;
};

const iconMap: { [k: string]: string } = {
  // contacts
  email: email,
  link: link,
  linkedin: linkedin,
  address: address,
  // socials
  dribble: dribble,
  instagram: instagram,
  phone: phone,
  twitter: twitter,
  // flags
  it: italy,
  gb: gb,
  gr: greek,
  es: spain,
};

const linkType: { [k: string]: string } = {
  email: "mailto: ",
  address: "https://maps.google.com/?q=",
  phone: "tel: ",
};

export const Contact: React.FC<Props> = ({
  title,
  link,
  subtitle,
  iconType = "",
  variant = "contacts",
  iconLink,
}) => {
  return (
    <div className={styles.container}>
      <img
        className={`${styles.icon} ${styles[variant]}`}
        src={iconLink || iconMap[iconType?.toLowerCase()]}
        alt={title}
      />
      <div className={styles.content}>
        <div
          className={variant !== "languages" ? styles.title : styles.subtitle}
        >
          {title}
        </div>
        {variant !== "languages" ? (
          <a
            className={styles.subtitle}
            href={`${linkType[iconType || ""] || ""}${link}`}
            target="_blank"
            rel="noreferrer"
          >
            {link}
          </a>
        ) : (
          <div className={styles.title}>{subtitle}</div>
        )}
      </div>
    </div>
  );
};
