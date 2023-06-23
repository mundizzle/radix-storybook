import type { Meta, StoryObj } from "@storybook/react";
import ToggleGroup from ".";

const meta = {
  title: "Radix UI/ToggleGroup",
  component: ToggleGroup,
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
