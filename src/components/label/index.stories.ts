import type { Meta, StoryObj } from "@storybook/react";
import Label from ".";

const meta = {
  title: "Radix UI/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
