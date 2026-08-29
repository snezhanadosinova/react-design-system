import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";
import { FormField } from "../FormField/FormField";

const meta = {
    title: "Forms/Textarea",
    component: Textarea,
    tags: ["autodocs"],

    argTypes: {
        id: {
            control: "text",
        },
        name: {
            control: "text",
        },
        placeholder: {
            control: "text",
        },
        value: {
            control: "text",
        },
        defaultValue: {
            control: "text",
        },
        rows: {
            control: "number",
        },
        cols: {
            control: "number",
        },
        minLength: {
            control: "number",
        },
        maxLength: {
            control: "number",
        },
        wrap: {
            control: "select",
            options: ["hard", "soft", "off"],
        },
        disabled: {
            control: "boolean",
        },
        readOnly: {
            control: "boolean",
        },
        required: {
            control: "boolean",
        },
        autoFocus: {
            control: "boolean",
        },
        autoComplete: {
            control: "text",
        },
        className: {
            control: "text",
        },
    },

    decorators: [
        (Story) => (
            <div style={{ width: "400px" }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: "description",
        name: "description",
        placeholder: "Enter your description...",
    },
};

export const WithFormField: Story = {
    args: {
        id: "description-field",
        name: "description",
        placeholder: "Enter your description...",
    },
    render: (args) => (
        <FormField
            label="Description"
            htmlFor="description-field"
        >
            <Textarea {...args} />
        </FormField>
    ),
};

export const Required: Story = {
    args: {
        id: "description-required",
        name: "description",
        placeholder: "Enter your description...",
    },
    render: (args) => (
        <FormField
            label="Description"
            htmlFor="description-required"
            required
        >
            <Textarea {...args} />
        </FormField>
    ),
};

export const WithHelperText: Story = {
    args: {
        id: "description-helper",
        name: "description",
        placeholder: "Enter your description...",
    },
    render: (args) => (
        <FormField
            label="Description"
            htmlFor="description-helper"
            helperText="Maximum 500 characters."
        >
            <Textarea {...args} maxLength={500} />
        </FormField>
    ),
};

export const WithError: Story = {
    args: {
        id: "description-error",
        name: "description",
        placeholder: "Enter your description...",
    },
    render: (args) => (
        <FormField
            label="Description"
            htmlFor="description-error"
            error="Description is required."
        >
            <Textarea {...args} />
        </FormField>
    ),
};

export const WithDefaultValue: Story = {
    args: {
        id: "description-default",
        name: "description",
        defaultValue:
            "This is some default content.",
        placeholder: "Enter your description...",
    },
    render: (args) => (
        <FormField
            label="Description"
            htmlFor="description-default"
        >
            <Textarea {...args} />
        </FormField>
    ),
};

export const Disabled: Story = {
    args: {
        id: "description-disabled",
        name: "description",
        value: "This field is disabled.",
        disabled: true,
    },
    render: (args) => (
        <FormField
            label="Description"
            htmlFor="description-disabled"
        >
            <Textarea {...args} />
        </FormField>
    ),
};

export const ReadOnly: Story = {
    args: {
        id: "description-readonly",
        name: "description",
        value: "This content cannot be edited.",
        readOnly: true,
    },
    render: (args) => (
        <FormField
            label="Description"
            htmlFor="description-readonly"
        >
            <Textarea {...args} />
        </FormField>
    ),
};

export const CustomRows: Story = {
    args: {
        id: "description-rows",
        name: "description",
        placeholder: "Enter your description...",
        rows: 8,
    },
    render: (args) => (
        <FormField
            label="Description"
            htmlFor="description-rows"
        >
            <Textarea {...args} />
        </FormField>
    ),
};

export const WithValidation: Story = {
    args: {
        id: "description-validation",
        name: "description",
        placeholder: "Enter your description...",
        minLength: 10,
        maxLength: 500,
        required: true,
    },
    render: (args) => (
        <FormField
            label="Description"
            htmlFor="description-validation"
            required
        >
            <Textarea {...args} />
        </FormField>
    ),
};
