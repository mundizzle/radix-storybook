import type { Meta, StoryObj } from "@storybook/react";
import Slider from ".";

const meta = {
  title: "Radix UI/Slider",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
