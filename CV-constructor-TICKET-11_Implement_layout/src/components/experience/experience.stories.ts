import type { Meta, StoryObj } from "@storybook/react";

/**
 * storybook понимает, что файл является сторёй по шаблону *.stories.* Все подходящие файлы он обрабатывает
 * и отражает в своём интерфейсе
 */

import { Experience } from "./experience"; // Импортируем наш компонент

const meta: Meta<typeof Experience> = {
  title: "Experience", // Название стори
  component: Experience, // Компонент стори
  parameters: {
    // Различные передаваемые параметры, в нашем случае это только центрирование
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>; // Типизация. Благодаря этому IDE знает, что можно передавать в args ниже

// Заполняем наш объект пропсами (props), как если бы это был реальный пример компонента. Называем соответственно
export const Default: Story = {
  args: {
    speciality: "Product designer",
    company: "Apple",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis consectetur mauris, nec vestibulum felis suscipit at. Aliquam faucibus risus justo. Quisque non neque dolor.",
    isPresent: false,
    dateStart: "Jul 20",
    dateEnd: "Jan 2022",
    place: "Cupertino, California",
  },
};

// В данном случае у нас флаг isPresent по умолчанию в true и можно заметить, что дефолтное состояние различается
export const Present: Story = {
  args: {
    speciality: "VR designer",
    company: "Meta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis consectetur mauris, nec vestibulum felis suscipit at. Aliquam faucibus risus justo. Quisque non neque dolor.",
    isPresent: true,
    dateStart: "",
    dateEnd: "",
    place: "Menlo Park, Calinfornia",
  },
};
