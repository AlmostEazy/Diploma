import type { Meta, StoryObj } from "@storybook/react";

import { Skill } from "./skill";

const meta: Meta<typeof Skill> = {
  title: "Skill",
  component: Skill,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    skill: "ReactJS",
  },
};

export const List: Story = {
  args: {
    skill: ["Typescript", "NextJS"],
  },
};

export const Group: Story = {
  args: {
    skill: ["ChakraUI;Emotion;Framer"],
  },
};
