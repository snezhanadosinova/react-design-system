import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Modal } from "./Modal";

const meta = {
    title: "Components/Modal",
    component: Modal,
    tags: ["autodocs"],

    args: {
        open: false,
        onClose: () => { },
        children: null,
        title: "Example modal",
        description: "This is an example modal description.",
    },

    argTypes: {
        open: {
            control: false,
            table: {
                disable: true,
            },
        },
        onClose: {
            control: false,
            table: {
                disable: true,
            },
        },
        children: {
            control: false,
            table: {
                disable: true,
            },
        },
    },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                >
                    Open modal
                </button>

                <Modal
                    {...args}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <p>
                        This is the content of the modal.
                    </p>
                </Modal>
            </>
        );
    },
};

export const WithFooter: Story = {
    args: {
        title: "Welcome to Modal Dialog",
        description:
            "This is an overlay dialog that captures user attention.",
    },

    render: (args) => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                >
                    Open modal
                </button>

                <Modal
                    {...args}
                    open={open}
                    onClose={() => setOpen(false)}
                    footer={
                        <>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                            >
                                Confirm
                            </button>
                        </>
                    }
                >
                    <p>
                        This modal demonstrates the optional footer
                        section.
                    </p>
                </Modal>
            </>
        );
    },
};

export const Confirmation: Story = {
    args: {
        title: "Delete item?",
        description: "This action cannot be undone.",
    },

    render: (args) => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                >
                    Delete item
                </button>

                <Modal
                    {...args}
                    open={open}
                    onClose={() => setOpen(false)}
                    footer={
                        <>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setOpen(false);
                                    alert("Item deleted");
                                }}
                            >
                                Delete
                            </button>
                        </>
                    }
                >
                    <p>
                        Are you sure you want to delete this item?
                    </p>
                </Modal>
            </>
        );
    },
};

export const LongContent: Story = {
    args: {
        title: "Terms and conditions",
        description: "Please read the following information.",
    },

    render: (args) => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                >
                    Open modal
                </button>

                <Modal
                    {...args}
                    open={open}
                    onClose={() => setOpen(false)}
                    footer={
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </button>
                    }
                >
                    {Array.from({ length: 15 }).map((_, index) => (
                        <p key={index}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. This is example content for
                            testing modal scrolling behavior.
                        </p>
                    ))}
                </Modal>
            </>
        );
    },
};
