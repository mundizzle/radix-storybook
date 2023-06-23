import type { Meta, StoryObj } from "@storybook/react";
import Popover from ".";

const meta = {
  title: "Radix UI/Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
