import React from "react";
import styles from "./main-page.module.scss";
import { Aside } from "../aside/aside";
import { MainContainer } from "../main-container/main-container";

export const MainPage: React.FC = () => (
  <div className={styles.container}>
    <Aside />
    <MainContainer />
  </div>
);
