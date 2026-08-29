import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";

const meta = {
    title: "Components/Divider",
    component: Divider,
    tags: ["autodocs"],

    args: {
        color: "default",
    },

    argTypes: {
        color: {
            control: "select",
            options: [
                "default",
                "muted",
                "strong",
                "primary",
                "danger",
            ],
        },
    },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
    args: {
        color: "default",
    },
};

export const Muted: Story = {
    args: {
        color: "muted",
    },
};

export const Strong: Story = {
    args: {
        color: "strong",
    },
};

export const Primary: Story = {
    args: {
        color: "primary",
    },
};

export const Danger: Story = {
    args: {
        color: "danger",
    },
};


export const InContent: Story = {
    render: () => (
        <div>
            <h3>Account settings</h3>

            <p>
                Manage your account preferences and
                personal information.
            </p>

            <Divider />

            <h3>Notifications</h3>

            <p>
                Choose which notifications you would
                like to receive.
            </p>

            <Divider />

            <h3>Privacy</h3>

            <p>
                Manage your privacy and security settings.
            </p>
        </div>
    ),
};
