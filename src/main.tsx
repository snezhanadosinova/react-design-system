import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/reset.css";
import "./styles/global.css";
import { Stack, Card, Text, Button, Grid, FormField, Input, Checkbox, Switch, Select } from "react-design-system";

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>


    <FormField label="Accept terms">
      <Checkbox />
    </FormField>

    <FormField label="Notifications">
      <Switch />
    </FormField>


    <Stack gap="lg">
      <Card>
        <Stack gap="sm">
          <Text variant="heading-3">Title</Text>
          <Text>Some content here</Text>
        </Stack>
      </Card>

      <Button>Click me</Button>
    </Stack>



    <FormField
      label="Email"
      error="Invalid email"
      helperText="We will not share your email"
      required
    >
      <Input placeholder="Enter email" />
    </FormField>


    <Grid columns={3} gap="lg">
      <Card>1</Card>
      <Card>2</Card>
      <Card>3</Card>
    </Grid>



    <Select
      label="Framework"
      options={options}
      value="react"
      onChange={(v) => console.log(v)}
    />

  </StrictMode>,
)
