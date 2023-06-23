import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from ".";

const meta = {
  title: "Radix UI/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
