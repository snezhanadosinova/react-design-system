import type { ReactNode } from "react";
import { Button, Link } from "../components";
import { useTheme } from "../hooks";
import styles from "./SiteLayout.module.css";

type SiteLayoutProps = {
  children: ReactNode;
  mainId?: string;
  mainClassName?: string;
  currentPage?: "home" | "getting-started" | "docs";
};

export function SiteLayout({ children, mainId, mainClassName, currentPage = "home" }: SiteLayoutProps) {
  const { mode, toggleTheme } = useTheme();

  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>React Design System</Link>
          <nav className={styles.navigation} aria-label="Main navigation">
            <Link href="/#components" variant="subtle" className={styles.navLink}>Components</Link>
            <Link href="/getting-started" variant="subtle" className={styles.navLink} aria-current={currentPage === "getting-started" ? "page" : undefined}>Get started</Link>
            <Link href="/docs" variant="subtle" className={styles.navLink} aria-current={currentPage === "docs" ? "page" : undefined}>Docs</Link>
          </nav>
          <Button
            variant="primary"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-pressed={mode === "dark"}
            title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
          >
            {mode === "light" ? "Dark mode" : "Light mode"}
          </Button>
        </div>
      </header>
      <main id={mainId} className={[styles.main, mainClassName ?? ""].filter(Boolean).join(" ")}>
        {children}
      </main>
      <footer id="footer" className={styles.footer}>
        <div className={styles.footerInner}>
          <span>React Design System</span>
          <span>Reusable React components and design tokens.</span>
        </div>
      </footer>
    </div>
  );
}
