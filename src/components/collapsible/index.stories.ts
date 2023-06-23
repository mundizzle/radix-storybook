import type { Meta, StoryObj } from "@storybook/react";
import Collapsible from ".";

const meta = {
  title: "Radix UI/Collapsible",
  component: Collapsible,
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
