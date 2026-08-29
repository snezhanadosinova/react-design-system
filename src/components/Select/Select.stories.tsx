import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";
import { FormField } from "../FormField/FormField";

const selectOptions = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
];

const meta = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],

  args: {
    options: selectOptions,
    placeholder: "Select a framework",
  },

  argTypes: {
    options: {
      control: "object",
      description: "Available select options",
    },
    placeholder: {
      control: "text",
      description: "Placeholder option",
    },
    id: {
      control: "text",
    },
    name: {
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
    required: {
      control: "boolean",
    },
    multiple: {
      control: "boolean",
    },
    size: {
      control: "number",
    },
    className: {
      control: "text",
    },
  },

  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "framework",
    name: "framework",
  },
};

export const WithFormField: Story = {
  args: {
    id: "framework-field",
    name: "framework",
  },
  render: (args) => (
    <FormField
      label="Framework"
      htmlFor="framework-field"
    >
      <Select {...args} />
    </FormField>
  ),
};

export const Selected: Story = {
  args: {
    id: "framework-selected",
    name: "framework",
    value: "react",
  },
  render: (args) => (
    <FormField
      label="Framework"
      htmlFor="framework-selected"
    >
      <Select {...args} />
    </FormField>
  ),
};

export const Required: Story = {
  args: {
    id: "framework-required",
    name: "framework",
    required: true,
  },
  render: (args) => (
    <FormField
      label="Framework"
      htmlFor="framework-required"
      required
    >
      <Select {...args} />
    </FormField>
  ),
};

export const Disabled: Story = {
  args: {
    id: "framework-disabled",
    name: "framework",
    disabled: true,
  },
  render: (args) => (
    <FormField
      label="Framework"
      htmlFor="framework-disabled"
    >
      <Select {...args} />
    </FormField>
  ),
};

export const WithHelperText: Story = {
  args: {
    id: "framework-helper",
    name: "framework",
  },
  render: (args) => (
    <FormField
      label="Framework"
      htmlFor="framework-helper"
      helperText="Choose your preferred frontend framework."
    >
      <Select {...args} />
    </FormField>
  ),
};

export const WithError: Story = {
  args: {
    id: "framework-error",
    name: "framework",
    value: "",
  },
  render: (args) => (
    <FormField
      label="Framework"
      htmlFor="framework-error"
      error="Please select a framework."
    >
      <Select {...args} />
    </FormField>
  ),
};

export const RequiredWithError: Story = {
  args: {
    id: "framework-required-error",
    name: "framework",
    required: true,
    value: "",
  },
  render: (args) => (
    <FormField
      label="Framework"
      htmlFor="framework-required-error"
      required
      error="Framework is required."
    >
      <Select {...args} />
    </FormField>
  ),
};

export const Form: Story = {
  args: {
    id: "framework-form",
    name: "framework",
  },
  render: (args) => (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const framework = data.get("framework");

        console.log("Submitted:", framework);
      }}
    >
      <FormField
        label="Framework"
        htmlFor="framework-form"
        required
      >
        <Select
          {...args}
          required
        />
      </FormField>

      <button
        type="submit"
        style={{
          marginTop: "16px",
          padding: "10px 16px",
          border: 0,
          borderRadius: "var(--radius-md)",
          background: "var(--color-primary)",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  ),
};
