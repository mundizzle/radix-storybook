import type { Meta, StoryObj } from "@storybook/react";
import Select from ".";

const meta = {
  title: "Radix UI/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
