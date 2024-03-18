import type { Meta, StoryObj } from "@storybook/react";

import { LatestProject } from "./latest-project";

const meta: Meta<typeof LatestProject> = {
  title: "LatestProject",
  component: LatestProject,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "",
    iconType: "project1",
    description:
      "Powerful website + dashboard template for your next Chakra UI project.",
    link: "https://ui-8.net",
  },
};
