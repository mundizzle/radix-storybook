import type { Meta, StoryObj } from "@storybook/react";
import Progress from ".";

const meta = {
  title: "Radix UI/Progress",
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
