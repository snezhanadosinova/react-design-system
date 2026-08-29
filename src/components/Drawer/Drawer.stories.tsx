import type { Meta, StoryObj } from "@storybook/react-vite";
import { Drawer } from "./Drawer";

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],

  args: {
    open: true,
    title: "Drawer",
    onClose: () => {},
  },

  argTypes: {
    open: {
      control: "boolean",
    },

    title: {
      control: "text",
    },

    onClose: {
      action: "closed",
    },

    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: "Settings",
  },

  render: (args) => (
    <Drawer {...args}>
      <p>
        This is the drawer content.
      </p>
    </Drawer>
  ),
};

export const Open: Story = {
  args: {
    open: true,
    title: "Navigation",
  },

  render: (args) => (
    <Drawer {...args}>
      <nav>
        <p>Dashboard</p>
        <p>Projects</p>
        <p>Settings</p>
      </nav>
    </Drawer>
  ),
};

export const WithoutTitle: Story = {
  args: {
    open: true,
    title: undefined,
  },

  render: (args) => (
    <Drawer {...args}>
      <p>
        This drawer doesn't have a title.
      </p>
    </Drawer>
  ),
};

export const LongContent: Story = {
  args: {
    open: true,
    title: "Long content",
  },

  render: (args) => (
    <Drawer {...args}>
      {Array.from({ length: 20 }, (_, index) => (
        <p key={index}>
          This is drawer content item {index + 1}.
        </p>
      ))}
    </Drawer>
  ),
};

export const WithForm: Story = {
  args: {
    open: true,
    title: "Edit profile",
  },

  render: (args) => (
    <Drawer {...args}>
      <form>
        <label>
          Name
          <input
            type="text"
            placeholder="Your name"
          />
        </label>

        <br />

        <label>
          Email
          <input
            type="email"
            placeholder="you@example.com"
          />
        </label>

        <br />

        <button type="submit">
          Save changes
        </button>
      </form>
    </Drawer>
  ),
};

export const Closed: Story = {
  args: {
    open: false,
    title: "Closed drawer",
  },

  render: (args) => (
    <Drawer {...args}>
      <p>
        This content is not visible while the
        drawer is closed.
      </p>
    </Drawer>
  ),
};
