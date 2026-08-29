import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner";

const meta = {
    title: "Components/Spinner",
    component: Spinner,
    tags: ["autodocs"],

    args: {
        color: "primary",
    },

    argTypes: {
        color: {
            control: "select",
            options: [
                "primary",
                "secondary",
                "success",
                "warning",
                "danger",
                "info",
                "inverse",
            ],
        },
    },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Primary: Story = {
    args: {
        color: "primary",
    },
};

export const Secondary: Story = {
    args: {
        color: "secondary",
    },
};

export const Success: Story = {
    args: {
        color: "success",
    },
};

export const Warning: Story = {
    args: {
        color: "warning",
    },
};

export const Danger: Story = {
    args: {
        color: "danger",
    },
};

export const Info: Story = {
    args: {
        color: "info",
    },
};

export const Inverse: Story = {
    args: {
        color: "inverse",
    },

    render: (args) => (
        <div
            style={{
                padding: "24px",
                background: "var(--color-text-primary)",
                borderRadius: "var(--radius-md)",
            }}
        >
            <Spinner {...args} />
        </div>
    ),
};
