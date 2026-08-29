import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta = {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],

    args: {
        padding: "md",
        shadow: "sm",
    },

    argTypes: {
        padding: {
            control: "select",
            options: [
                "none",
                "sm",
                "md",
                "lg",
            ],
        },

        shadow: {
            control: "select",
            options: [
                "none",
                "sm",
                "md",
                "lg",
            ],
        },

        children: {
            control: false,
        },
    },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: (args) => (
        <Card {...args}>
            <h3>Card title</h3>

            <p>
                This is a basic card component with
                configurable padding and shadow.
            </p>
        </Card>
    ),
};

export const NoPadding: Story = {
    args: {
        padding: "none",
        shadow: "sm",
    },

    render: (args) => (
        <Card {...args}>
            <div
                style={{
                    padding: "16px",
                }}
            >
                Content with custom padding.
            </div>
        </Card>
    ),
};

export const SmallPadding: Story = {
    args: {
        padding: "sm",
        shadow: "sm",
    },

    render: (args) => (
        <Card {...args}>
            <p>Small padding</p>
        </Card>
    ),
};

export const LargePadding: Story = {
    args: {
        padding: "lg",
        shadow: "sm",
    },

    render: (args) => (
        <Card {...args}>
            <h3>Large card</h3>

            <p>
                This card uses the large padding
                variant.
            </p>
        </Card>
    ),
};

export const NoShadow: Story = {
    args: {
        padding: "md",
        shadow: "none",
    },

    render: (args) => (
        <Card {...args}>
            <h3>Flat card</h3>

            <p>
                This card doesn't have a shadow.
            </p>
        </Card>
    ),
};

export const MediumShadow: Story = {
    args: {
        padding: "md",
        shadow: "md",
    },

    render: (args) => (
        <Card {...args}>
            <h3>Medium shadow</h3>

            <p>
                A card with a medium elevation.
            </p>
        </Card>
    ),
};

export const LargeShadow: Story = {
    args: {
        padding: "md",
        shadow: "lg",
    },

    render: (args) => (
        <Card {...args}>
            <h3>Large shadow</h3>

            <p>
                A card with a high elevation.
            </p>
        </Card>
    ),
};

export const Profile: Story = {
    args: {
        padding: "lg",
        shadow: "sm",
    },

    render: (args) => (
        <Card {...args}>
            <h2>John Doe</h2>

            <p>
                john.doe@example.com
            </p>

            <p>
                Product Designer
            </p>
        </Card>
    ),
};

export const WithActions: Story = {
    args: {
        padding: "lg",
        shadow: "sm",
    },

    render: (args) => (
        <Card {...args}>
            <h2>Delete account</h2>

            <p>
                This action cannot be undone.
            </p>

            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                <button type="button">
                    Cancel
                </button>

                <button type="button">
                    Delete account
                </button>
            </div>
        </Card>
    ),
};
