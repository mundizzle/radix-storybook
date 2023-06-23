import type { Meta, StoryObj } from "@storybook/react";
import AlertDialog from ".";

const meta = {
  title: "Radix UI/Alert Dialog",
  component: AlertDialog,
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
