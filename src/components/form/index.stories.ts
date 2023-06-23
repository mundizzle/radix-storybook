import type { Meta, StoryObj } from "@storybook/react";
import Form from ".";

const meta = {
  title: "Radix UI/Form",
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
