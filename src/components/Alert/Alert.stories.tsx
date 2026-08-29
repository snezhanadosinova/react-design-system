import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],

  args: {
    type: "info",
    title: "Information",
    message: "This is an informational message.",
    dismissible: false,
  },

  argTypes: {
    type: {
      control: "select",
      options: [
        "info",
        "success",
        "warning",
        "error",
      ],
    },

    title: {
      control: "text",
    },

    message: {
      control: "text",
    },

    dismissible: {
      control: "boolean",
    },

    onDismiss: {
      action: "dismissed",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Info: Story = {
  args: {
    type: "info",
    title: "Information",
    message: "Here is some useful information.",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    title: "Success",
    message: "Your changes have been saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Warning",
    message: "Please review this information before continuing.",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    title: "Something went wrong",
    message: "We couldn't complete your request. Please try again.",
  },
};

export const WithoutTitle: Story = {
  args: {
    type: "info",
    title: undefined,
    message: "This alert doesn't have a title.",
  },
};

export const Dismissible: Story = {
  args: {
    type: "success",
    title: "Profile updated",
    message: "Your profile has been updated successfully.",
    dismissible: true,
  },
};

export const DismissibleError: Story = {
  args: {
    type: "error",
    title: "Error",
    message: "Something went wrong. You can dismiss this message.",
    dismissible: true,
  },
};
