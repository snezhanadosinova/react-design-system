import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta = {
    title: "Forms/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],

    parameters: {
        layout: "centered",
    },

    argTypes: {
        label: {
            control: "text",
        },
        error: {
            control: "text",
        },
        helperText: {
            control: "text",
        },
        checked: {
            control: "boolean",
        },
        defaultChecked: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        required: {
            control: "boolean",
        },
        name: {
            control: "text",
        },
        value: {
            control: "text",
        },
        id: {
            control: "text",
        },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: "terms",
        name: "terms",
        label: "I agree to the terms and conditions",
    },
};

export const Checked: Story = {
    args: {
        id: "terms-checked",
        name: "terms",
        label: "I agree to the terms and conditions",
        defaultChecked: true,
    },
};

export const Required: Story = {
    args: {
        id: "terms-required",
        name: "terms",
        label: "I agree to the terms and conditions",
        required: true,
    },
};

export const WithHelperText: Story = {
    args: {
        id: "newsletter",
        name: "newsletter",
        label: "Subscribe to newsletter",
        helperText:
            "You can unsubscribe at any time.",
    },
};

export const WithError: Story = {
    args: {
        id: "terms-error",
        name: "terms",
        label: "I agree to the terms and conditions",
        error: "You must accept the terms.",
    },
};

export const Disabled: Story = {
    args: {
        id: "terms-disabled",
        name: "terms",
        label: "I agree to the terms and conditions",
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        id: "terms-disabled-checked",
        name: "terms",
        label: "I agree to the terms and conditions",
        defaultChecked: true,
        disabled: true,
    },
};
