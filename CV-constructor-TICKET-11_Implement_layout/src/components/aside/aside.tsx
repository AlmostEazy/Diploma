import React, { useContext } from "react";
import styles from "./aside.module.scss";
import { Section } from "../section/section";
import { Profile } from "../profile/profile";
import { Contact, iconType } from "../contact/contact";
import { Divider } from "../divider/divider";
import { CVContext } from "../../contexts/cv/cv";

export const Aside = () => {
  const { profile } = useContext(CVContext);

  return (
    <div className={styles.container}>
      <Section>
        <Profile
          photoLink={profile.info.photoLink}
          name={`${profile.info.name} ${profile.info.surname} `}
          speciality={profile.info.speciality}
          quoteText={profile.info.quote.text}
          quoteAuthor={profile.info.quote.author}
        />
      </Section>
      <Divider />
      <Section>
        <>
          {profile.contacts.map(({ title, link, iconType, iconLink }) => {
            return (
              <Contact
                key={title}
                variant={"contacts"}
                title={title}
                link={link}
                iconType={iconType as iconType}
                iconLink={iconLink}
              />
            );
          })}
        </>
      </Section>
      <Divider />
      <Section title={"Socials"}>
        <>
          {profile.socials.map(({ title, link, iconType, iconLink }) => {
            return (
              <Contact
                key={title}
                variant={"socials"}
                title={title}
                link={link}
                iconType={iconType as iconType}
                iconLink={iconLink}
              />
            );
          })}
        </>
      </Section>
      <Divider />
      <Section title={"Languages"}>
        <>
          {profile.languages.map(({ title, level, country, iconLink }) => {
            return (
              <Contact
                key={title}
                variant={"languages"}
                title={title}
                subtitle={level}
                iconType={country as iconType}
                iconLink={iconLink}
              />
            );
          })}
        </>
      </Section>
    </div>
  );
};
