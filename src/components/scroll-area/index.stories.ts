import type { Meta, StoryObj } from "@storybook/react";
import ScrollAria from ".";

const meta = {
  title: "Radix UI/ScrollAria",
  component: ScrollAria,
} satisfies Meta<typeof ScrollAria>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
