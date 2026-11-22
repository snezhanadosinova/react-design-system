import { Card, Grid, Link, Text } from "../components";
import { SiteLayout } from "../layout/SiteLayout";
import styles from "./GuidePage.module.css";

export function GettingStartedPage() {
  return (
    <SiteLayout currentPage="getting-started" mainClassName={styles.page}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Setup guide</p>
        <Text as="h1" className={styles.title}>Get started</Text>
        <p className={styles.lead}>
          Install the package, load its styles, and use a component in your React app.
        </p>
      </header>

      <Grid columns={1} md={2} gap="md" className={styles.grid}>
        <Card className={styles.card}>
          <span className={styles.stepNumber} aria-hidden="true">1</span>
          <h2 className={styles.cardTitle}>Install the package</h2>
          <p className={styles.cardText}>React and React DOM are peer dependencies of the component library.</p>
          <pre className={styles.code}><code>npm install react-design-system react react-dom</code></pre>
        </Card>
        <Card className={styles.card}>
          <span className={styles.stepNumber} aria-hidden="true">2</span>
          <h2 className={styles.cardTitle}>Load the stylesheet</h2>
          <p className={styles.cardText}>Import the package CSS once in your app entry point so component styles and design tokens are available.</p>
          <pre className={styles.code}><code>import "react-design-system/style.css";</code></pre>
        </Card>
      </Grid>

      <section className={styles.codeSection} aria-labelledby="first-component">
        <h2 id="first-component" className={styles.codeTitle}>Render your first component</h2>
        <p className={styles.codeLead}>Wrap your app in ThemeProvider, then import components as needed.</p>
        <pre className={styles.code}><code>{`import { Button, ThemeProvider } from "react-design-system";
import "react-design-system/style.css";

export function App() {
  return (
    <ThemeProvider>
      <Button>Continue</Button>
    </ThemeProvider>
  );
}`}</code></pre>
      </section>

      <Grid columns={1} md={2} gap="md" className={styles.grid}>
        <Card className={styles.card}>
          <h2 className={styles.cardTitle}>Explore the examples</h2>
          <p className={styles.cardText}>The examples page shows form controls, layouts, feedback, and overlays together.</p>
          <div className={styles.actions}><Link href="/#components">Browse components</Link></div>
        </Card>
        <Card className={styles.card}>
          <h2 className={styles.cardTitle}>Run Storybook</h2>
          <p className={styles.cardText}>Use Storybook to inspect each component's variants, states, and accessibility annotations.</p>
          <pre className={styles.code}><code>npm run storybook</code></pre>
        </Card>
      </Grid>

      <div className={styles.actions}>
        <Link href="/docs" variant="primary-button">Read the docs</Link>
        <Link href="/" variant="secondary-button">Back to examples</Link>
      </div>
    </SiteLayout>
  );
}
