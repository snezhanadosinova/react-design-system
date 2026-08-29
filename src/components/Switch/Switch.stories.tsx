import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";
import { Switch } from "./Switch";

const meta = {
    title: "Forms/Switch",
    component: Switch,
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
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: "notifications",
        name: "notifications",
        label: "Enable notifications",
    },
};

export const Enabled: Story = {
    args: {
        id: "notifications-enabled",
        name: "notifications",
        label: "Enable notifications",
        defaultChecked: true,
    },
};

export const Required: Story = {
    args: {
        id: "notifications-required",
        name: "notifications",
        label: "Enable notifications",
        required: true,
    },
};

export const WithHelperText: Story = {
    args: {
        id: "notifications-helper",
        name: "notifications",
        label: "Enable notifications",
        helperText:
            "You will receive email notifications.",
    },
};

export const WithError: Story = {
    args: {
        id: "notifications-error",
        name: "notifications",
        label: "Enable notifications",
        error:
            "Notifications could not be enabled.",
    },
};

export const Disabled: Story = {
    args: {
        id: "notifications-disabled",
        name: "notifications",
        label: "Enable notifications",
        disabled: true,
    },
};

export const DisabledEnabled: Story = {
    args: {
        id: "notifications-disabled-enabled",
        name: "notifications",
        label: "Enable notifications",
        defaultChecked: true,
        disabled: true,
    },
};
