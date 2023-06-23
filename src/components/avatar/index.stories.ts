import type { Meta, StoryObj } from "@storybook/react";
import Avatar from ".";

const meta = {
  title: "Radix UI/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
