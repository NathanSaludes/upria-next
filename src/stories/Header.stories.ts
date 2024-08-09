import { Header } from "@/components/Header";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UPRIA Header",
  component: Header,
  parameters: {}
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {};
