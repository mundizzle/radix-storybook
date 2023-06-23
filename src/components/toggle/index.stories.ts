import type { Meta, StoryObj } from "@storybook/react";
import Toggle from ".";

const meta = {
  title: "Radix UI/Toggle",
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
