import type { Meta, StoryObj } from "@storybook/react";
import Dialog from ".";

const meta = {
  title: "Radix UI/Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
