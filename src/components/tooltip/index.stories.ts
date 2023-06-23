import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from ".";

const meta = {
  title: "Radix UI/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
