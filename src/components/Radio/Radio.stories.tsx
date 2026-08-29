import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";
import { useState } from "react";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

const meta = {
    title: "Forms/Radio",
    component: Radio,
    tags: ["autodocs"],

    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <RadioGroup
            name="accountType"
            label="Account type"
        >
            <Radio
                id="personal"
                value="personal"
                label="Personal"
            />

            <Radio
                id="business"
                value="business"
                label="Business"
            />

            <Radio
                id="enterprise"
                value="enterprise"
                label="Enterprise"
            />
        </RadioGroup>
    ),
};

export const WithDefaultValue: Story = {
    render: () => (
        <RadioGroup
            name="plan-default"
            label="Plan"
            defaultValue="pro"
        >
            <Radio
                id="free"
                value="free"
                label="Free"
            />

            <Radio
                id="pro"
                value="pro"
                label="Pro"
            />

            <Radio
                id="enterprise-plan"
                value="enterprise"
                label="Enterprise"
            />
        </RadioGroup>
    ),
};

export const Controlled: Story = {
    render: function ControlledStory() {
        const [value, setValue] =
            useState("personal");

        return (
            <RadioGroup
                name="accountType-controlled"
                label="Account type"
                value={value}
                onChange={setValue}
            >
                <Radio
                    id="personal-controlled"
                    value="personal"
                    label="Personal"
                />

                <Radio
                    id="business-controlled"
                    value="business"
                    label="Business"
                />

                <Radio
                    id="enterprise-controlled"
                    value="enterprise"
                    label="Enterprise"
                />
            </RadioGroup>
        );
    },
};

export const Required: Story = {
    render: () => (
        <RadioGroup
            name="plan-required"
            label="Plan"
            required
        >
            <Radio
                id="free-required"
                value="free"
                label="Free"
            />

            <Radio
                id="pro-required"
                value="pro"
                label="Pro"
            />
        </RadioGroup>
    ),
};

export const WithHelperText: Story = {
    render: () => (
        <RadioGroup
            name="plan-helper"
            label="Plan"
            helperText="You can change your plan later."
        >
            <Radio
                id="free-helper"
                value="free"
                label="Free"
            />

            <Radio
                id="pro-helper"
                value="pro"
                label="Pro"
            />
        </RadioGroup>
    ),
};

export const WithError: Story = {
    render: () => (
        <RadioGroup
            name="plan-error"
            label="Plan"
            required
            error="Please select a plan."
        >
            <Radio
                id="free-error"
                value="free"
                label="Free"
            />

            <Radio
                id="pro-error"
                value="pro"
                label="Pro"
            />
        </RadioGroup>
    ),
};

export const DisabledGroup: Story = {
    render: () => (
        <RadioGroup
            name="plan-disabled"
            label="Plan"
            disabled
            defaultValue="pro"
        >
            <Radio
                id="free-disabled"
                value="free"
                label="Free"
            />

            <Radio
                id="pro-disabled"
                value="pro"
                label="Pro"
            />
        </RadioGroup>
    ),
};

export const DisabledOption: Story = {
    render: () => (
        <RadioGroup
            name="plan-option-disabled"
            label="Plan"
        >
            <Radio
                id="free-option-disabled"
                value="free"
                label="Free"
            />

            <Radio
                id="pro-option-disabled"
                value="pro"
                label="Pro"
                disabled
            />

            <Radio
                id="enterprise-option-disabled"
                value="enterprise"
                label="Enterprise"
            />
        </RadioGroup>
    ),
};

export const Form: Story = {
    render: () => (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                const formData = new FormData(
                    event.currentTarget,
                );

                console.log(
                    "Submitted:",
                    formData.get("plan"),
                );
            }}
        >
            <RadioGroup
                name="plan"
                label="Plan"
                required
            >
                <Radio
                    id="free-form"
                    value="free"
                    label="Free"
                />

                <Radio
                    id="pro-form"
                    value="pro"
                    label="Pro"
                />

                <Radio
                    id="enterprise-form"
                    value="enterprise"
                    label="Enterprise"
                />
            </RadioGroup>

            <button
                type="submit"
                style={{
                    marginTop: 16,
                    padding: "10px 16px",
                    border: 0,
                    borderRadius:
                        "var(--radius-md)",
                    background:
                        "var(--color-primary)",
                    color: "#fff",
                    cursor: "pointer",
                }}
            >
                Submit
            </button>
        </form>
    ),
};
