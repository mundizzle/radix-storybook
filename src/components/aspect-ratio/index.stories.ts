import type { Meta, StoryObj } from "@storybook/react";
import AspectRatio from ".";

const meta = {
  title: "Radix UI/Aspect Ratio",
  component: AspectRatio,
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
