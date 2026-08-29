import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "./Stack";

const meta = {
    title: "Components/Stack",
    component: Stack,
    tags: ["autodocs"],

    args: {
        children: (
            <>
                <div
                    style={{
                        width: "80px",
                        padding: "12px",
                        background: "var(--color-primary)",
                        color: "white",
                        borderRadius: "6px",
                    }}
                >
                    Item 1
                </div>

                <div
                    style={{
                        width: "80px",
                        padding: "12px",
                        background: "var(--color-secondary)",
                        color: "white",
                        borderRadius: "6px",
                    }}
                >
                    Item 2
                </div>

                <div
                    style={{
                        width: "80px",
                        padding: "12px",
                        background: "var(--color-border)",
                        borderRadius: "6px",
                    }}
                >
                    Item 3
                </div>
            </>
        ),

        direction: "column",
        gap: "md",
        align: "stretch",
        justify: "start",
    },

    argTypes: {
        children: {
            control: false,
        },

        direction: {
            control: "select",
            options: [
                "row",
                "column",
            ],
        },

        gap: {
            control: "select",
            options: [
                "sm",
                "md",
                "lg",
            ],
        },

        align: {
            control: "select",
            options: [
                "start",
                "center",
                "end",
                "stretch",
            ],
        },

        justify: {
            control: "select",
            options: [
                "start",
                "center",
                "between",
            ],
        },
    },

    render: (args) => (
        <div
            style={{
                width: "400px",
                height: "300px",
                padding: "16px",
                border: "1px dashed var(--color-border)",
                boxSizing: "border-box",
            }}
        >
            <Stack
                {...args}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    ),
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Row: Story = {
    args: {
        direction: "row",
    },
};

export const Column: Story = {
    args: {
        direction: "column",
    },
};

export const SmallGap: Story = {
    args: {
        gap: "sm",
    },
};

export const MediumGap: Story = {
    args: {
        gap: "md",
    },
};

export const LargeGap: Story = {
    args: {
        gap: "lg",
    },
};

export const AlignCenter: Story = {
    args: {
        align: "center",
    },
};

export const AlignEnd: Story = {
    args: {
        align: "end",
    },
};

export const JustifyCenter: Story = {
    args: {
        justify: "center",
    },
};

export const SpaceBetween: Story = {
    args: {
        direction: "row",
        justify: "between",
    },
};
