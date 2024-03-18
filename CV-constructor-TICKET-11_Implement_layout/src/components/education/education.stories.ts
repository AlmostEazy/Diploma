import type { Meta, StoryObj } from "@storybook/react";

import { Education } from "./education";

const meta: Meta<typeof Education> = {
  title: "Education",
  component: Education,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconType: "ux",
    iconLink: "",
    title: "UX acadamy",
    description: "UX Design certificate",
    date: "Feb 2020",
  },
};
