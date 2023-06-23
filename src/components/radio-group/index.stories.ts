import type { Meta, StoryObj } from "@storybook/react";
import RadioGroup from ".";

const meta = {
  title: "Radix UI/RadioGroup",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
