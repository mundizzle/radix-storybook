import type { Meta, StoryObj } from "@storybook/react";
import Toolbar from ".";

const meta = {
  title: "Radix UI/Toolbar",
  component: Toolbar,
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
