import type { Meta, StoryObj } from "@storybook/react";
import Form from ".";

const meta = {
  title: "Radix UI/Form",
  component: Form,
  argTypes: {
    tokens: {
      options: ["Rightpoint", "Woodward"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tokens: "Rightpoint",
  },
};
