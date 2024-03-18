import type { Decorator } from "@storybook/react";
import ThemeContextProvider from "../../contexts/theme/theme-context-provider";
import { ThemeBlock } from "./theme-block";
import { themes } from "../../contexts/theme/theme-context";

/**
 * Самописное расширение для сторибука, чтобы была возможность разрабатывать компоненты с переключением тем
 * Или с двумя темами сразу
 *
 * @param StoryFn
 * @param context
 * @constructor
 */
export const WithTheme: Decorator = (StoryFn, context) => {
  // Берём состояние темы либо из контекста (когда переключаем вручную), либо из глобальной переменной,
  // если контекст ещё не задан
  const theme = context.parameters.theme || context.globals.theme;

  switch (theme) {
    // Одновременное отображение двух тем
    // ThemeContextProvider - провайдер глобальной темы
    // ThemeBlock - обёртка над разрабатываемым компонентом
    // StoryFn - сам компонент
    case "side-by-side": {
      return (
        <>
          <ThemeContextProvider theme={themes.light}>
            <ThemeBlock left>
              <StoryFn />
            </ThemeBlock>
          </ThemeContextProvider>
          <ThemeContextProvider theme={themes.dark}>
            <ThemeBlock>
              <StoryFn />
            </ThemeBlock>
          </ThemeContextProvider>
        </>
      );
    }
    default: {
      // Одновременное только выбранной темы
      return (
        <ThemeContextProvider theme={theme}>
          <ThemeBlock fill>
            <StoryFn />
          </ThemeBlock>
        </ThemeContextProvider>
      );
    }
  }
};
