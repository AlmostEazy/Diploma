import type { Meta, StoryObj } from "@storybook/react";

import { Contact } from "./contact";

const meta: Meta<typeof Contact> = {
  title: "Contact",
  component: Contact,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Website",
    link: "https://aldesign.it",
    iconType: "link",
    variant: "contacts",
  },
};

export const Social: Story = {
  args: {
    title: "Instagram",
    link: "@angelolibero.design",
    iconType: "instagram",
    variant: "socials",
  },
};

export const Flag: Story = {
  args: {
    title: "Italian",
    subtitle: "Native",
    iconType: "it",
    variant: "languages",
  },
};
