import React, { useContext } from "react";
import styles from "./theme-switcher.module.scss";
import { ThemeContext, themes } from "../../contexts/theme/theme-context"; // Импортируем созданный контекст и переменную theme

type Props = {
  onChange: () => void; // Пропс в который мы передадим переключения стейта темы сверху
};

/**
 * Компонент для переключения контекста. Представляет собой простой инпут, который принимает функцию onChange извне
 * @param onChange
 * @constructor
 */
export const Toggle: React.FC<Props> = ({ onChange }) => {
  const value = useContext(ThemeContext); // Подключаем контекст

  return (
    <label className={styles.root} htmlFor="toggler">
      <input
        id="toggler"
        type="checkbox"
        onClick={onChange}
        checked={value === themes.dark}
        readOnly
      />
      <span className={styles.slider} />
      <span className={styles.wave} />
    </label>
  );
};
