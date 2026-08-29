import type { Meta, StoryObj } from "@storybook/react-vite";
import { List } from "./List";

const meta = {
    title: "Components/List",
    component: List,
    tags: ["autodocs"],

    decorators: [
        (Story) => (
            <div style={{ width: "360px" }}>
                <Story />
            </div>
        ),
    ],

    args: {
        children: null,
        ordered: false,
        variant: "default",
    },

    argTypes: {
        children: {
            control: false,
            table: {
                disable: true,
            },
        },

        ordered: {
            control: "boolean",
            description:
                "Renders the list as an ordered list with numbers.",
        },

        variant: {
            control: "select",
            options: ["default", "menu"],
            description:
                "Controls the visual style of the list.",
        },
    },
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ordered: false,
        variant: "default",
    },

    render: (args) => (
        <List {...args}>
            <List.Item>
                Production-ready components
            </List.Item>

            <List.Item>
                Full TypeScript support
            </List.Item>

            <List.Item>
                Theme customization
            </List.Item>

            <List.Item>
                Responsive design
            </List.Item>
        </List>
    ),
};

export const Ordered: Story = {
    args: {
        ordered: true,
        variant: "default",
    },

    render: (args) => (
        <List {...args}>
            <List.Item>
                Install dependencies
            </List.Item>

            <List.Item>
                Import components
            </List.Item>

            <List.Item>
                Wrap with ThemeProvider
            </List.Item>

            <List.Item>
                Start building
            </List.Item>
        </List>
    ),
};

export const WithIcons: Story = {
    args: {
        variant: "menu",
        ordered: false,
    },

    render: (args) => (
        <List {...args}>
            <List.Item icon="🏠">
                Home
            </List.Item>

            <List.Item icon="📖">
                Documentation
            </List.Item>

            <List.Item icon="🎨">
                Design Tokens
            </List.Item>

            <List.Item icon="⚙️">
                Settings
            </List.Item>

            <List.Item icon="📞">
                Support
            </List.Item>
        </List>
    ),
};

export const Menu: Story = {
    args: {
        variant: "menu",
        ordered: false,
    },

    render: (args) => (
        <List {...args}>
            <List.Item
                icon="🏠"
                selected
            >
                Home
            </List.Item>

            <List.Item icon="📖">
                Documentation
            </List.Item>

            <List.Item icon="🎨">
                Design Tokens
            </List.Item>

            <List.Item icon="⚙️">
                Settings
            </List.Item>

            <List.Item icon="📞">
                Support
            </List.Item>
        </List>
    ),
};

export const MenuWithDisabledItem: Story = {
    args: {
        variant: "menu",
        ordered: false,
    },

    render: (args) => (
        <List {...args}>
            <List.Item
                icon="🏠"
                selected
            >
                Home
            </List.Item>

            <List.Item icon="📖">
                Documentation
            </List.Item>

            <List.Item
                icon="🎨"
                disabled
            >
                Design Tokens
            </List.Item>

            <List.Item icon="⚙️">
                Settings
            </List.Item>

            <List.Item icon="📞">
                Support
            </List.Item>
        </List>
    ),
};

export const Selected: Story = {
    args: {
        variant: "default",
        ordered: false,
    },

    render: (args) => (
        <List {...args}>
            <List.Item>
                Home
            </List.Item>

            <List.Item selected>
                Documentation
            </List.Item>

            <List.Item>
                Design Tokens
            </List.Item>

            <List.Item>
                Settings
            </List.Item>
        </List>
    ),
};

export const Disabled: Story = {
    args: {
        variant: "default",
        ordered: false,
    },

    render: (args) => (
        <List {...args}>
            <List.Item>
                Home
            </List.Item>

            <List.Item disabled>
                Documentation
            </List.Item>

            <List.Item>
                Design Tokens
            </List.Item>

            <List.Item>
                Settings
            </List.Item>
        </List>
    ),
};

export const CustomContent: Story = {
    args: {
        variant: "default",
        ordered: false,
    },

    render: (args) => (
        <List {...args}>
            <List.Item>
                <div>
                    <strong>React</strong>

                    <div
                        style={{
                            marginTop: "2px",
                            fontSize: "13px",
                            color: "var(--color-text-secondary)",
                        }}
                    >
                        JavaScript UI library
                    </div>
                </div>
            </List.Item>

            <List.Item selected>
                <div>
                    <strong>Vue</strong>

                    <div
                        style={{
                            marginTop: "2px",
                            fontSize: "13px",
                            color: "var(--color-text-secondary)",
                        }}
                    >
                        Progressive JavaScript framework
                    </div>
                </div>
            </List.Item>

            <List.Item>
                <div>
                    <strong>Angular</strong>

                    <div
                        style={{
                            marginTop: "2px",
                            fontSize: "13px",
                            color: "var(--color-text-secondary)",
                        }}
                    >
                        Web application framework
                    </div>
                </div>
            </List.Item>
        </List>
    ),
};
