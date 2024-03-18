import React, { useState } from "react";
import "./App.scss";
import { Toggle } from "./components/theme-switcher/theme-switcher";
import ThemeContextProvider, {
  getTheme,
} from "./contexts/theme/theme-context-provider";
import { usePDF } from "react-to-pdf";
import { themes } from "./contexts/theme/theme-context";
import { MainPage } from "./components/main-page/main-page";
import { CVContext } from "./contexts/cv/cv";
import { cv1 } from "./utils/mocks/cv-1";

function App() {
  const [theme, setTheme] = useState(getTheme());
  const [cv, setCV] = useState(cv1); // Для начала загружаем предподготовленное CV, чтобы просто была не пустая страница
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" }); // Используем библиотеку конвертации в PDF
  let fileReader: FileReader;

  /**
   * Как только файл успешно прочитан - записываем его в state (и одновременно в контекст,
   * т.к. cv ниже передаётся в CVContext.Provider
   */
  const handleFileRead = () => {
    if (typeof fileReader.result === "string") {
      setCV(JSON.parse(fileReader.result));
    }
  };

  /**
   * Для того, чтобы загрузить CV из файла необходимо использовать FileReader
   * Достаём файл из input и пытаемся прочесть как текст
   * @param event
   */
  const uploadFile = (event: any) => {
    let file = event.target.files[0];

    if (file) {
      fileReader = new FileReader();
      fileReader.onload = handleFileRead;
      fileReader.readAsText(file);
    }
  };

  /**
   * Контейнер нашего приложения. Всё приложение обёрнуто в ThemeContextProvider
   * Чтобы по переключателю в common-colors.scss подменялись цвета на цвета тёмной или светлой темы
   * Сама MainPage ещё дополнительно обёрнута в CVContext, чтобы прокинуть прочитанное из файла CV
   */
  return (
    <ThemeContextProvider theme={theme}>
      <div className="App">
        <Toggle
          onChange={() => {
            if (theme === themes.light) {
              setTheme(themes.dark);
            } else {
              setTheme(themes.light);
            }
          }}
        />
        <label className={"file"}>
          <input type={"file"} accept={".json"} onChange={uploadFile} />
        </label>
        <button className="PDF" onClick={() => toPDF()}>
          PDF
        </button>
        <CVContext.Provider value={cv}>
          <div ref={targetRef}>
            <MainPage />
          </div>
        </CVContext.Provider>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
