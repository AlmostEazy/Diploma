import { createContext } from "react";

/**
 * Просто переменная для удобства, чтобы корректно переключать темы и не использовать везде самописные строки
 */
export const themes = {
  dark: "dark",
  light: "light",
};

/**
 * Создаём контекст и задаём ему дефолтное значение в светлую тему
 */
export const ThemeContext = createContext("light");
