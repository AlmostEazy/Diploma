import React from "react";

import figma from "./assets/figma.svg";
import vector from "./assets/vector.svg";
import maze from "./assets/maze.svg";
import notion from "./assets/notion.svg";
import rotato from "./assets/rotato.svg";
import spline from "./assets/spline.svg";
import vscode from "./assets/vscode.svg";
import xcode from "./assets/xcode.svg";
import zeplin from "./assets/zeplin.svg";

import styles from "./tools.module.scss";

type Props = {
  title: string;
  description: string;
  iconType?: string;
  iconLink?: string;
};

const iconMap: { [k: string]: string } = {
  figma: figma,
  vector: vector,
  maze: maze,
  notion: notion,
  rotato: rotato,
  spline: spline,
  vscode: vscode,
  xcode: xcode,
  zeplin: zeplin,
};

export const Tools: React.FC<Props> = ({
  title,
  description,
  iconType = "",
  iconLink,
}) => (
  <div className={styles.container}>
    <img src={iconLink || iconMap[iconType?.toLowerCase()]} alt={""} />
    <div className={styles.title}>{title}</div>
    <div className={styles.description}>{description}</div>
  </div>
);
