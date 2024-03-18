import type { Meta, StoryObj } from "@storybook/react";

import { ExampleComponent } from "./example-component";

const meta: Meta<typeof ExampleComponent> = {
  title: "ExampleComponent",
  component: ExampleComponent,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isEditEnabled: false,
  },
};

export const Light: Story = {
  args: {
    isEditEnabled: false,
  },
  parameters: {
    theme: "light",
  },
};

export const Dark: Story = {
  args: {
    isEditEnabled: false,
  },
  parameters: {
    theme: "dark",
  },
};

export const Editable: Story = {
  args: {
    isEditEnabled: true,
  },
};
