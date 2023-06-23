import type { Meta, StoryObj } from "@storybook/react";
import Menubar from ".";

const meta = {
  title: "Radix UI/Menubar",
  component: Menubar,
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
