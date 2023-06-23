import type { Meta, StoryObj } from "@storybook/react";
import NavigationMenu from ".";

const meta = {
  title: "Radix UI/NavigationMenu",
  component: NavigationMenu,
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
