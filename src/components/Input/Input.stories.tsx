import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Input } from "./Input";
import { FormField } from "../FormField/FormField";

const meta = {
    title: "Forms/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        leftIcon: {
            control: false,
            description: "Icon displayed on the left side",
        },
        rightIcon: {
            control: false,
            description: "Icon displayed on the right side",
        },
        className: {
            control: "text",
        },
        type: {
            control: "select",
            options: [
                "text",
                "email",
                "password",
                "number",
                "search",
                "tel",
                "url",
                "date",
                "datetime-local",
                "month",
                "time",
                "week",
                "color",
                "file",
            ],
        },
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
        min: {
            control: "text",
        },
        max: {
            control: "text",
        },
        minLength: {
            control: "number",
        },
        maxLength: {
            control: "number",
        },
        step: {
            control: "text",
        },
        pattern: {
            control: "text",
        },
        size: {
            control: "number",
        },
        multiple: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: "email",
        name: "email",
        type: "email",
        placeholder: "Enter your email",
    },
};

export const WithFormField: Story = {
    args: {
        id: "form-email",
        name: "email",
        type: "email",
        placeholder: "Enter your email",
    },
    render: (args) => (
        <FormField
            label="Email"
            htmlFor="form-email"
        >
            <Input {...args} />
        </FormField>
    ),
};

export const Required: Story = {
    args: {
        id: "required-email",
        name: "email",
        type: "email",
        placeholder: "Enter your email",
    },
    render: (args) => (
        <FormField
            label="Email"
            htmlFor="required-email"
            required
        >
            <Input {...args} />
        </FormField>
    ),
};

export const WithHelperText: Story = {
    args: {
        id: "helper-email",
        name: "email",
        type: "email",
        placeholder: "Enter your email",
    },
    render: (args) => (
        <FormField
            label="Email"
            htmlFor="helper-email"
            helperText="We'll never share your email."
        >
            <Input {...args} />
        </FormField>
    ),
};

export const Error: Story = {
    args: {
        id: "error-email",
        name: "email",
        type: "email",
        value: "invalid-email",
        readOnly: true,
    },
    render: (args) => (
        <FormField
            label="Email"
            htmlFor="error-email"
            error="Please enter a valid email address."
        >
            <Input {...args} />
        </FormField>
    ),
};

export const Disabled: Story = {
    args: {
        id: "disabled-email",
        name: "email",
        type: "email",
        value: "user@example.com",
        disabled: true,
    },
    render: (args) => (
        <FormField
            label="Email"
            htmlFor="disabled-email"
        >
            <Input {...args} />
        </FormField>
    ),
};

export const ReadOnly: Story = {
    args: {
        id: "readonly-email",
        name: "email",
        type: "email",
        value: "user@example.com",
        readOnly: true,
    },
    render: (args) => (
        <FormField
            label="Email"
            htmlFor="readonly-email"
        >
            <Input {...args} />
        </FormField>
    ),
};

export const WithLeftIcon: Story = {
    args: {
        id: "search-left",
        name: "search",
        type: "search",
        placeholder: "Search...",
        leftIcon: <span>🔍</span>,
    },
    render: (args) => (
        <FormField
            label="Search"
            htmlFor="search-left"
        >
            <Input {...args} />
        </FormField>
    ),
};

export const WithRightIcon: Story = {
    args: {
        id: "search-right",
        name: "search",
        type: "search",
        placeholder: "Search...",
        rightIcon: <span>🔍</span>,
    },
    render: (args) => (
        <FormField
            label="Search"
            htmlFor="search-right"
        >
            <Input {...args} />
        </FormField>
    ),
};

export const Password: Story = {
    args: {
        id: "password",
        name: "password",
        type: "password",
        placeholder: "Enter your password",
        autoComplete: "current-password",
    },
    render: function PasswordStory(args) {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <FormField
                label="Password"
                htmlFor="password"
            >
                <Input
                    {...args}
                    type={showPassword ? "text" : "password"}
                    rightIcon={
                        <button
                            type="button"
                            onClick={() => setShowPassword((value) => !value)}
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    }
                />
            </FormField>
        );
    },
};

export const WithDefaultValue: Story = {
    args: {
        id: "username",
        name: "username",
        type: "text",
        defaultValue: "john.doe",
        placeholder: "Enter your username",
    },
    render: (args) => (
        <FormField
            label="Username"
            htmlFor="username"
        >
            <Input {...args} />
        </FormField>
    ),
};

export const Number: Story = {
    args: {
        id: "age",
        name: "age",
        type: "number",
        placeholder: "Enter your age",
        min: 0,
        max: 120,
        step: 1,
    },
    render: (args) => (
        <FormField
            label="Age"
            htmlFor="age"
        >
            <Input {...args} />
        </FormField>
    ),
};

export const WithValidation: Story = {
    args: {
        id: "username-validation",
        name: "username",
        type: "text",
        placeholder: "Enter username",
        minLength: 3,
        maxLength: 20,
        pattern: "[a-zA-Z0-9]+",
        required: true,
    },
    render: (args) => (
        <FormField
            label="Username"
            htmlFor="username-validation"
            required
        >
            <Input {...args} />
        </FormField>
    ),
};
