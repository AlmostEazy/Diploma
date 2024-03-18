import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "./theme-switcher";

const meta: Meta<typeof Toggle> = {
  title: "Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {},
  },
};
