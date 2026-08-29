import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta = {
    title: "Components/Text",
    component: Text,
    tags: ["autodocs"],

    args: {
        children: "Text",
        variant: "body",
        weight: "regular",
        color: "primary",
    },

    argTypes: {
        variant: {
            control: "select",
            options: [
                "body",
                "body-sm",
                "body-lg",
                "heading-1",
                "heading-2",
                "heading-3",
                "caption",
            ],
        },

        weight: {
            control: "select",
            options: [
                "regular",
                "medium",
                "semibold",
                "bold",
            ],
        },

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

        as: {
            control: "select",
            options: [
                "span",
                "p",
                "h1",
                "h2",
                "h3",
                "small",
                "div",
            ],
        },
    },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Body: Story = {
    args: {
        variant: "body",
        children: "Body text",
    },
};

export const BodySmall: Story = {
    args: {
        variant: "body-sm",
        children: "Small body text",
    },
};

export const BodyLarge: Story = {
    args: {
        variant: "body-lg",
        children: "Large body text",
    },
};

export const Heading1: Story = {
    args: {
        variant: "heading-1",
        children: "Heading 1",
    },
};

export const Heading2: Story = {
    args: {
        variant: "heading-2",
        children: "Heading 2",
    },
};

export const Heading3: Story = {
    args: {
        variant: "heading-3",
        children: "Heading 3",
    },
};

export const Caption: Story = {
    args: {
        variant: "caption",
        children: "Caption text",
    },
};

export const Primary: Story = {
    args: {
        color: "primary",
        children: "Primary text",
    },
};

export const Secondary: Story = {
    args: {
        color: "secondary",
        children: "Secondary text",
    },
};

export const Success: Story = {
    args: {
        color: "success",
        children: "Success message",
    },
};

export const Warning: Story = {
    args: {
        color: "warning",
        children: "Warning message",
    },
};

export const Danger: Story = {
    args: {
        color: "danger",
        children: "Error message",
    },
};

export const Info: Story = {
    args: {
        color: "info",
        children: "Information message",
    },
};

export const Inverse: Story = {
    args: {
        color: "inverse",
        children: "Inverse text",
    },
};

export const Regular: Story = {
    args: {
        weight: "regular",
        children: "Regular 400",
    },
};

export const Medium: Story = {
    args: {
        weight: "medium",
        children: "Medium 500",
    },
};

export const Semibold: Story = {
    args: {
        weight: "semibold",
        children: "Semibold 600",
    },
};

export const Bold: Story = {
    args: {
        weight: "bold",
        children: "Bold 700",
    },
};

export const HeadingWithColor: Story = {
    args: {
        variant: "heading-2",
        weight: "bold",
        color: "primary",
        children: "Colored heading",
    },
};

export const ErrorMessage: Story = {
    args: {
        variant: "body-sm",
        color: "danger",
        children: "Something went wrong. Please try again.",
    },
};

export const SuccessMessage: Story = {
    args: {
        variant: "body-sm",
        color: "success",
        children: "Your changes have been saved successfully.",
    },
};

export const SemanticHeading: Story = {
    args: {
        as: "h1",
        variant: "heading-1",
        children: "Page title",
    },
};

export const SemanticParagraph: Story = {
    args: {
        as: "p",
        variant: "body",
        children:
            "This is a paragraph rendered as a semantic HTML element.",
    },
};