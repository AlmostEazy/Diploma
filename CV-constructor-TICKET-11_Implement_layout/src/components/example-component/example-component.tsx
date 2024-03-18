import React, { FC, useState } from "react";
import styles from "./example-component.module.scss"; // css module подход
import "./example-component.scss"; // Обычный подход

import light from "./assets/light.png";

type Props = {
  isEditEnabled: boolean;
};

export const ExampleComponent: FC<Props> = (props) => {
  const { isEditEnabled } = props;

  const [value, setValue] = useState("Some text");

  // React.ChangeEvent - Тип события
  // <HTMLInputElement> - Элемент, на котором событие происходит
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={"exampleComponent"}>
      {isEditEnabled ? (
        <input value={value} onChange={handleChange} />
      ) : (
        <div className={`${styles.view}`}>
          <div>
            <img src={light} alt={"light"} />
          </div>
          <span>{value}</span>
        </div>
      )}
    </div>
  );
};
