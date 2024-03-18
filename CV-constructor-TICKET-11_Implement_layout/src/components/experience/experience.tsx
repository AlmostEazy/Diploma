// Импортируем всё, что необходимо из реакта
import React, { Ref, useRef, useState } from "react";

// Импортируем SVG как переменные, потому что планируем использовать непосредственно в html
import apple from "./assets/apple.svg";
import meta from "./assets/meta.svg";
import google from "./assets/google.svg";
import tesla from "./assets/tesla.svg";
import vector from "./assets/vector.svg";

// Импортируем стили в виде модулей (см. README)
import styles from "./experience.module.scss";

// Пропсы (свойства) компонента, которые ему будут приходить. Необязательные свойства помечены знаком вопроса ?
type Props = {
  speciality: string;
  company: string;
  description: string;
  isPresent: boolean;
  dateStart: string;
  dateEnd: string;
  place: string;
  iconLink?: string;
};

// Для удобства, чтобы не писать if/else или switch/case конструкцию - пользуемся обычным объектом,
// чтобы замапить ключ-индекс
const companyMap: { [k: string]: string } = {
  apple: apple,
  meta: meta,
  google: google,
  tesla: tesla,
  vectornator: vector,
};

// При инициализации компонента есть несколько способов доставать переменные.
// Более классический принять props и затем в отдельной строке достать из него значения (см. Example component)
// Или мы можем сразу с помощью фигурных скобок извлечь переменные
export const Experience: React.FC<Props> = ({
  speciality,
  company,
  description,
  isPresent,
  dateStart,
  dateEnd,
  place,
  iconLink,
}) => {
  // Состояние, которое отвечает за то, схлопнут или нет блок описания опыта
  const [isExpanded, setExpand] = useState(false);
  // Ref - ссылка на HTML элемент, которая позволяет получать необходимые параметры не используя querySelector
  // visibleRef - ссылка на видимую изначально часть опыта (должность, компания и т.д.)
  const visibleRef: Ref<HTMLDivElement> = useRef(null);
  // hiddenRef - ссылка на невидимое изначально описание места работы
  const hiddenRef: Ref<HTMLDivElement> = useRef(null);

  /**
   * Далее идёт почти обычный HTML документы с некоторыми переменными, используемыми "на месте"
   * Классы для элемента записываются через className, а инлайн стили через объект. Причем свойства пишутся в camelCase
   * Чтобы навесить onClick лучше всего воспользоваться стрелочными функциями, которые не хранят контекста
   * В данном случае, т.к. функция достаточно простая - функция инициализируется прямо в div элементе
   * src мы передаём конструкцию iconLink || companyMap[company.toLowerCase()] для того, чтобы у пользователя была возможность
   * передать по ссылке свою картинку в первую очередь, а если таковой нет - можно использовать заготовленные иконки,
   * которые через companyMap трансформируются в картинку, если переданный ключ совпадёт.
   * Флаг isPresent осуществляет conditional rendering (рендеринг компонента в зависимости от условия)
   * В данном случае, когда флаг в true - будет отрендерена плашка Present (а выше в div применён соответствующий класс и стиль)
   * При false будет рисоваться стандартная плашка с местом работы
   * При этом в двух div элементах есть ref о котором говорилось выше
   */
  return (
    <div
      className={`${styles.container} ${isPresent && styles.present}`}
      style={{
        // @ts-ignore
        height: `${isExpanded ? `${visibleRef.current?.offsetHeight + hiddenRef.current?.offsetHeight + 5}px` : `${visibleRef.current?.offsetHeight}px`}`,
      }}
      onClick={() => setExpand(!isExpanded)}
    >
      <div ref={visibleRef} className={styles.content}>
        <img src={iconLink || companyMap[company.toLowerCase()]} alt={""} />
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.speciality}>{speciality}</div>
            <div className={styles.company}>{company}</div>
          </div>
          <div className={styles.right}>
            {isPresent ? (
              <div className={styles.present}>Present</div>
            ) : (
              <div className={styles.date}>{`${dateStart} - ${dateEnd}`}</div>
            )}
            <a
              href={`https://maps.google.com/?q=${place}`}
              className={styles.place}
              target="_blank"
              rel="noreferrer"
            >
              {place}
            </a>
          </div>
        </div>
      </div>
      <div
        ref={hiddenRef}
        className={`${styles.description} ${isExpanded ? styles.expanded : ""}`}
      >
        {description}
      </div>
    </div>
  );
};
