import type { Meta, StoryObj } from "@storybook/react";
import ContextMenu from ".";

const meta = {
  title: "Radix UI/ContextMenu",
  component: ContextMenu,
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
