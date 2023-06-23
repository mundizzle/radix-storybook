import type { Meta, StoryObj } from "@storybook/react";
import Switch from ".";

const meta = {
  title: "Radix UI/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
