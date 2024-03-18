import type { Meta, StoryObj } from "@storybook/react";

import { Tools } from "./tools";

const meta: Meta<typeof Tools> = {
  title: "Tools",
  component: Tools,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Figma",
    description: "UI Design, prototyping ",
    iconType: "Figma",
  },
};
