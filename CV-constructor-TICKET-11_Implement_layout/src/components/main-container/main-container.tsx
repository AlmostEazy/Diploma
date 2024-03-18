import React, { useContext } from "react";
import styles from "./main-container.module.scss";
import { CVContext } from "../../contexts/cv/cv";
import { Section } from "../section/section";
import { Experience } from "../experience/experience";
import { Education, iconType } from "../education/education";
import { Tools } from "../tools/tools";
import { Skill } from "../skill/skill";
import { LatestProject } from "../latest-project/latest-project";

export const MainContainer = () => {
  const { content } = useContext(CVContext);

  return (
    <div className={styles.container}>
      <Section variant={"main"} title={"Experience"}>
        {content.experience.map(
          ({
            speciality,
            company,
            description,
            isPresent,
            dateStart,
            dateEnd,
            place,
          }) => {
            return (
              <Experience
                key={speciality}
                speciality={speciality}
                company={company}
                description={description}
                isPresent={isPresent}
                dateStart={dateStart}
                dateEnd={dateEnd}
                place={place}
              />
            );
          },
        )}
      </Section>
      <Section variant={"main"} title={"Skills"}>
        {content.skills.development.map((skill) => {
          return (
            <Skill
              key={Array.isArray(skill) ? skill[0] : skill}
              skill={skill}
            />
          );
        })}
      </Section>
      <Section variant={"main"} title={"Education"}>
        {content.education.map(({ title, date, description, iconType }) => {
          return (
            <Education
              key={title}
              title={title}
              date={date}
              description={description}
              iconType={iconType as iconType}
            />
          );
        })}
      </Section>
      <Section variant={"main"} title={"Tools"}>
        {content.tools.map(({ title, description, iconType }) => {
          return (
            <Tools
              key={title}
              title={title}
              description={description}
              iconType={iconType}
            />
          );
        })}
      </Section>
      <Section variant={"main"} title={"Latest projects"}>
        {content.latest.map(
          ({ iconType, iconLink, title, description, link, skills }) => {
            return (
              <LatestProject
                key={title}
                title={title}
                description={description}
                link={link}
                skills={skills}
                iconType={iconType}
                iconLink={iconLink}
              />
            );
          },
        )}
      </Section>
    </div>
  );
};
