import { Card, Grid, Link, Text } from "../components";
import { SiteLayout } from "../layout/SiteLayout";
import styles from "./GuidePage.module.css";

const componentGroups = [
  { title: "Forms", items: ["FormField", "Input", "Textarea", "Select", "Checkbox", "Switch", "RadioGroup"] },
  { title: "Actions and feedback", items: ["Button", "Link", "Badge", "Alert", "Spinner"] },
  { title: "Layout and content", items: ["Card", "Grid", "Stack", "Text", "List", "Divider", "Avatar"] },
  { title: "Overlays", items: ["Modal", "Drawer"] },
];

export function DocumentationPage() {
  return (
    <SiteLayout currentPage="docs" mainClassName={styles.page}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Reference</p>
        <Text as="h1" className={styles.title}>Documentation</Text>
        <p className={styles.lead}>
          Find a component, see where it is used, and open the interactive examples for its states and variants.
        </p>
      </header>

      <Grid columns={1} md={2} gap="md" className={styles.grid}>
        {componentGroups.map((group) => (
          <Card key={group.title} className={styles.card}>
            <h2 className={styles.groupTitle}>{group.title}</h2>
            <ul className={styles.componentList}>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Card>
        ))}
      </Grid>

      <section className={styles.codeSection} aria-labelledby="usage-title">
        <h2 id="usage-title" className={styles.codeTitle}>Usage and theming</h2>
        <p className={styles.codeLead}>Import from the package entry point. ThemeProvider applies the selected mode to the document.</p>
        <pre className={styles.code}><code>{`import { FormField, Input, ThemeProvider } from "react-design-system";
import "react-design-system/style.css";

<ThemeProvider defaultTheme="light">
  <FormField label="Email" required>
    <Input type="email" name="email" autoComplete="email" />
  </FormField>
</ThemeProvider>`}</code></pre>
        <p className={styles.note}>
          Controls use native HTML elements. Give each field a visible label, keep errors connected to the field, and check contrast in both themes.
        </p>
      </section>

      <Grid columns={1} md={2} gap="md" className={styles.grid}>
        <Card className={styles.card}>
          <h2 className={styles.cardTitle}>Form examples</h2>
          <p className={styles.cardText}>See labels, helper text, validation, and interactive controls in context.</p>
          <div className={styles.actions}><Link href="/#forms">Open form examples</Link></div>
        </Card>
        <Card className={styles.card}>
          <h2 className={styles.cardTitle}>Component examples</h2>
          <p className={styles.cardText}>Browse layout components, buttons, statuses, and overlays.</p>
          <div className={styles.actions}><Link href="/#components">Open component examples</Link></div>
        </Card>
      </Grid>

      <div className={styles.actions}>
        <Link href="/getting-started" variant="primary-button">Get started</Link>
        <Link href="/" variant="secondary-button">Back to examples</Link>
      </div>
    </SiteLayout>
  );
}
