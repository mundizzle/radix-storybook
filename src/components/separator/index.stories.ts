import type { Meta, StoryObj } from "@storybook/react";
import Separator from ".";

const meta = {
  title: "Radix UI/Separator",
  component: Separator,
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
