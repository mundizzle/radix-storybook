import type { Meta, StoryObj } from "@storybook/react";
import Accordion from ".";

const meta = {
  title: "Radix UI/Accordion",
  component: Accordion,
  argTypes: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
