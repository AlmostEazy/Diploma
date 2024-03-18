import React, { useEffect } from "react";
import { ThemeContext, themes } from "./theme-context";

/**
 * В данной функции мы проверяем - есть ли сохранённое значение темы в localStorage (1)
 * Если оно есть и соответствует одному из двух значений из нашего объекта - возвращаем её (2)
 * Иначе проверяем с помощью matchMedia предпочтительную тему юзера (3)
 * Если совпадает со светлой - возвращаем светлую (4)
 * Если нет - тёмную (5)
 */
export const getTheme = () => {
  const theme = `${window?.localStorage?.getItem("theme")}`;
  if (Object.values(themes).includes(theme)) return theme;

  const userMedia = window.matchMedia("(prefers-color-scheme: light)");
  if (userMedia.matches) return themes.light;

  return themes.dark;
};

/**
 * Принимаемые значения компонента
 */
type Props = {
  children: React.ReactNode;
  theme: string;
};

/**
 * Компонент-провайдер. Провайдеры служат для того, чтобы значения контекста были доступны всем тем компонентам, которые были в них обёрнуты
 * В данном случае мы ещё дополнительно с помощью хука useEffect (при каждом изменении theme в данном случае),
 * записываем новое/актуальное значение перенной theme в localStorage
 * И затем в div также заносится новое значение данной переменной
 * Теперь всем children доступно потребление значения из контекста с помощью хука useContext
 * @param children
 * @param theme
 * @constructor
 */
const ThemeProvider: React.FC<Props> = ({ children, theme }) => {
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="theme-provider" data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
