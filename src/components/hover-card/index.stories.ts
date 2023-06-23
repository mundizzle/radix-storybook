import type { Meta, StoryObj } from "@storybook/react";
import HoverCard from ".";

const meta = {
  title: "Radix UI/HoverCard",
  component: HoverCard,
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
