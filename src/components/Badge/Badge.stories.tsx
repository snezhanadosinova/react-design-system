import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, type BadgeVariant } from "./Badge";

const meta = {
    title: "Components/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
    args: {
        children: "Badge",
    },
    argTypes: {
        variant: {
            control: "select",
            options: [
                "default",
                "success",
                "warning",
                "danger",
                "default-inverse",
                "success-inverse",
                "warning-inverse",
                "danger-inverse",
            ],
        },
        children: {
            control: "text",
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Default",
        variant: "default",
    },
};

export const Success: Story = {
    args: {
        children: "Success",
        variant: "success",
    },
};

export const Warning: Story = {
    args: {
        children: "Warning",
        variant: "warning",
    },
};

export const Danger: Story = {
    args: {
        children: "Danger",
        variant: "danger",
    },
};

export const DefaultInverse: Story = {
    args: {
        children: "Default inverse",
        variant: "default-inverse",
    },
};

export const SuccessInverse: Story = {
    args: {
        children: "Success inverse",
        variant: "success-inverse",
    },
};

export const WarningInverse: Story = {
    args: {
        children: "Warning inverse",
        variant: "warning-inverse",
    },
};

export const DangerInverse: Story = {
    args: {
        children: "Danger inverse",
        variant: "danger-inverse",
    },
};

export const AllVariants: Story = {
    render: () => {
        const variants: BadgeVariant[] = [
            "default",
            "success",
            "warning",
            "danger",
            "default-inverse",
            "success-inverse",
            "warning-inverse",
            "danger-inverse",
        ];

        return (
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                }}
            >
                {variants.map((variant) => (
                    <Badge key={variant} variant={variant}>
                        {variant}
                    </Badge>
                ))}
            </div>
        );
    },
};
