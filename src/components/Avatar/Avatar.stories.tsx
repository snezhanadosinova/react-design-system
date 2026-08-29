import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta = {
    title: "Components/Avatar",
    component: Avatar,
    tags: ["autodocs"],

    args: {
        name: "John Doe",
        size: "md",
    },

    argTypes: {
        name: {
            control: "text",
        },

        src: {
            control: "text",
        },

        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
    },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Initials: Story = {
    args: {
        name: "John Doe",
    },
};

export const WithImage: Story = {
    args: {
        name: "John Doe",
        src: "https://i.pravatar.cc/150?img=12",
    },
};

export const Small: Story = {
    args: {
        name: "John Doe",
        size: "sm",
    },
};

export const Medium: Story = {
    args: {
        name: "John Doe",
        size: "md",
    },
};

export const Large: Story = {
    args: {
        name: "John Doe",
        size: "lg",
    },
};

export const SingleName: Story = {
    args: {
        name: "John",
    },
};

export const MultipleNames: Story = {
    args: {
        name: "John Michael Doe",
    },
};

export const AvatarGroup: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
            }}
        >
            <Avatar
                name="John Doe"
                src="https://i.pravatar.cc/150?img=12"
            />

            <Avatar name="Jane Smith" />

            <Avatar
                name="Michael Brown"
                src="https://i.pravatar.cc/150?img=11"
            />

            <Avatar name="Sarah Wilson" />
        </div>
    ),
};
