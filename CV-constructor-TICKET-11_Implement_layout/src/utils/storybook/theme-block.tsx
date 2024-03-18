import React from "react";

type Props = {
  left?: boolean;
  fill?: boolean;
  children: React.ReactNode;
};

/**
 * Обёртка над компонентом для сторибука. Представляет собой обычный div со стилям для левого/правого/одновременного
 * отображения разрабатываемого компонента
 * @param left
 * @param fill
 * @param children - передаваемый компонент (StoryFn из WithTheme в этом случае, см. with-theme.tsx)
 * @constructor
 */
export const ThemeBlock: React.FC<Props> = ({ left, fill, children }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: `${left || fill ? 0 : "50vw"}`,
        borderRight: `${left ? "1px solid #202020" : "none"}`,
        right: `${left ? "50vw" : 0}`,
        width: `${fill ? "100vw" : "50vw"}`,
        height: "100vh",
        bottom: 0,
        overflow: "auto",
        paddingTop: "1rem",
        background: "var(--background-color)",
      }}
    >
      {children}
    </div>
  );
};
