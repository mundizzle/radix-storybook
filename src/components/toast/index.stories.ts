import type { Meta, StoryObj } from "@storybook/react";
import Toast from ".";

const meta = {
  title: "Radix UI/Toast",
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
