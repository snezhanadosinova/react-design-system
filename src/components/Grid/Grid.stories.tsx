import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from "./Grid";

const meta = {
  title: "Layout/Grid",
  component: Grid,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: {
        type: "number",
        min: 1,
        max: 6,
        step: 1,
      },
      description: "Default number of columns",
    },
    sm: {
      control: {
        type: "number",
        min: 1,
        max: 6,
        step: 1,
      },
      description: "Number of columns from 640px",
    },
    md: {
      control: {
        type: "number",
        min: 1,
        max: 6,
        step: 1,
      },
      description: "Number of columns from 768px",
    },
    lg: {
      control: {
        type: "number",
        min: 1,
        max: 6,
        step: 1,
      },
      description: "Number of columns from 1024px",
    },
    xl: {
      control: {
        type: "number",
        min: 1,
        max: 6,
        step: 1,
      },
      description: "Number of columns from 1280px",
    },
    gap: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Gap between grid items",
    },
    children: {
      control: false,
      description: "Grid content",
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

const Item = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: "24px",
      background: "#e5e7eb",
      borderRadius: "8px",
      textAlign: "center",
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    columns: 2,
    gap: "md",
  },
  render: (args) => (
    <Grid {...args}>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
    </Grid>
  ),
};

export const OneColumn: Story = {
  args: {
    columns: 1,
    gap: "md",
  },
  render: (args) => (
    <Grid {...args}>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    gap: "md",
  },
  render: (args) => (
    <Grid {...args}>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
      <Item>6</Item>
    </Grid>
  ),
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: "md",
  },
  render: (args) => (
    <Grid {...args}>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
      <Item>6</Item>
      <Item>7</Item>
      <Item>8</Item>
    </Grid>
  ),
};

export const Responsive: Story = {
  args: {
    columns: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 6,
    gap: "md",
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 12 }, (_, index) => (
        <Item key={index}>{index + 1}</Item>
      ))}
    </Grid>
  ),
};

export const MobileToDesktop: Story = {
  args: {
    columns: 1,
    md: 2,
    lg: 4,
    gap: "md",
  },
  render: (args) => (
    <Grid {...args}>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
      <Item>6</Item>
      <Item>7</Item>
      <Item>8</Item>
    </Grid>
  ),
};

export const TwoToFourColumns: Story = {
  args: {
    columns: 2,
    lg: 4,
    gap: "lg",
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 8 }, (_, index) => (
        <Item key={index}>{index + 1}</Item>
      ))}
    </Grid>
  ),
};

export const SmallGap: Story = {
  args: {
    columns: 2,
    md: 3,
    gap: "sm",
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, index) => (
        <Item key={index}>{index + 1}</Item>
      ))}
    </Grid>
  ),
};

export const MediumGap: Story = {
  args: {
    columns: 2,
    md: 3,
    gap: "md",
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, index) => (
        <Item key={index}>{index + 1}</Item>
      ))}
    </Grid>
  ),
};

export const LargeGap: Story = {
  args: {
    columns: 2,
    md: 3,
    gap: "lg",
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, index) => (
        <Item key={index}>{index + 1}</Item>
      ))}
    </Grid>
  ),
};

export const WithHTMLAttributes: Story = {
  args: {
    columns: 2,
    gap: "md",
    id: "example-grid",
    role: "list",
    "aria-label": "Example grid",
  },
  render: (args) => (
    <Grid {...args}>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
    </Grid>
  ),
};