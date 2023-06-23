import type { Meta, StoryObj } from "@storybook/react";
import Tabs from ".";

const meta = {
  title: "Radix UI/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
