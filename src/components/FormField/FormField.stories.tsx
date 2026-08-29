import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "./FormField";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";

const options = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
];

const meta = {
    title: "Forms/FormField",
    component: FormField,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
    args: {
        label: "Email",
        htmlFor: "email",
    },
    render: (args) => (
        <FormField {...args}>
            <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
            />
        </FormField>
    ),
};

export const WithInputError: Story = {
    args: {
        label: "Email",
        htmlFor: "email-error",
        required: true,
        error: "Please enter a valid email address.",
    },
    render: (args) => (
        <FormField {...args}>
            <Input
                id="email-error"
                name="email"
                type="email"
                placeholder="Enter your email"
            />
        </FormField>
    ),
};

export const WithInputHelper: Story = {
    args: {
        label: "Email",
        htmlFor: "email-helper",
        helperText: "We'll never share your email.",
    },
    render: (args) => (
        <FormField {...args}>
            <Input
                id="email-helper"
                name="email"
                type="email"
                placeholder="Enter your email"
            />
        </FormField>
    ),
};

export const WithSelect: Story = {
    args: {
        label: "Framework",
        htmlFor: "framework",
        required: true,
    },
    render: (args) => (
        <FormField {...args}>
            <Select
                id="framework"
                name="framework"
                options={options}
                placeholder="Select a framework"
            />
        </FormField>
    ),
};

export const WithSelectError: Story = {
    args: {
        label: "Framework",
        htmlFor: "framework-error",
        error: "Please select a framework.",
    },
    render: (args) => (
        <FormField {...args}>
            <Select
                id="framework-error"
                name="framework"
                options={options}
                placeholder="Select a framework"
            />
        </FormField>
    ),
};
