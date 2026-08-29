import { useState } from 'react';
import {
    Button,
    Card,
    Text,
    Stack,
    Grid,
    FormField,
    Input,
    Checkbox,
    Switch,
    Select,
    Badge,
    Alert,
    Spinner,
    Avatar,
    Divider,
    List,
    Textarea,
    Radio,
    RadioGroup,
    Modal,
    Drawer,
} from '../components';
import { useTheme } from '../hooks';
import styles from './HomePage.module.css';

export function HomePage() {
    const { mode, toggleTheme } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        framework: '',
        notifications: false,
        terms: false,
    });

    const selectOptions = [
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte' },
        { label: 'Angular', value: 'angular' },
    ];

    return (
        <main className={styles.homePage}>
            <div className={styles.themeSwitcher}>
                <Button
                    variant="ghost"
                    onClick={toggleTheme}
                    title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
                >
                    {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
                </Button>
            </div>
            {/* Hero Section */}
            <header className={styles.hero}>
                <Stack gap="lg" align="center">
                    <div className={styles.heroIcon}>✨</div>
                    <Text variant="heading-1" className={styles.heroTitle}>
                        React Design System
                    </Text>
                    <Text variant="body-lg" className={styles.heroSubtitle}>
                        Beautiful, reusable components built with React, TypeScript, and modern design principles
                    </Text>
                    <Stack direction="row" gap="md">
                        <Button
                            variant="primary"
                            onClick={() => document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Components
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => document.getElementById('forms')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Try the Form
                        </Button>
                    </Stack>
                </Stack>
            </header>

            {/* Features Overview */}
            <Section title="Key Features" subtitle="Everything you need to build modern UIs">
                <Grid columns={4} gap="md">
                    <FeatureCard icon="🎨" title="Themeable" description="Light and dark mode with CSS variables" />
                    <FeatureCard icon="⚡" title="Fast" description="Built with Vite for lightning-fast development" />
                    <FeatureCard icon="📦" title="Modular" description="Use only what you need, tree-shakeable" />
                    <FeatureCard icon="🔒" title="Type Safe" description="Full TypeScript support throughout" />
                </Grid>
            </Section>

            {/* Typography Section */}
            <Section title="Typography" subtitle="Text styles and variants">
                <Card className={styles.contentCard}>
                    <Grid columns={2} gap="lg">
                        <div>
                            <Stack gap="md">
                                <div className={styles.variantLabel}>Headings</div>
                                <Text variant="heading-1">Heading 1</Text>
                                <Text variant="heading-2">Heading 2</Text>
                                <Text variant="heading-3">Heading 3</Text>
                            </Stack>
                        </div>
                        <div>
                            <Stack gap="md">
                                <div className={styles.variantLabel}>Body Text</div>
                                <Text variant="body-lg">Large body text - For important content</Text>
                                <Text variant="body">Regular body text - Standard content</Text>
                                <Text variant="body-sm">Small body text - Secondary information</Text>
                            </Stack>
                        </div>
                    </Grid>
                </Card>
            </Section>

            {/* Buttons Section */}
            <Section id="components" title="Buttons" subtitle="Multiple variants and sizes">
                <Grid columns={3} gap="md">
                    <ComponentShowcase variant="primary" label="Primary">
                        <Stack gap="sm">
                            <Button variant="primary" size="sm">Small</Button>
                            <Button variant="primary" size="md">Medium</Button>
                            <Button variant="primary" size="lg">Large</Button>
                        </Stack>
                    </ComponentShowcase>

                    <ComponentShowcase variant="secondary" label="Secondary">
                        <Stack gap="sm">
                            <Button variant="secondary" size="sm">Small</Button>
                            <Button variant="secondary" size="md">Medium</Button>
                            <Button variant="secondary" size="lg">Large</Button>
                        </Stack>
                    </ComponentShowcase>

                    <ComponentShowcase variant="accent" label="Variants">
                        <Stack gap="sm">
                            <Button variant="success">Success</Button>
                            <Button variant="warning">Warning</Button>
                            <Button variant="danger">Danger</Button>
                        </Stack>
                    </ComponentShowcase>

                    <ComponentShowcase variant="accent" label="Ghost Style">
                        <Stack gap="sm">
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="ghost" disabled>Disabled</Button>
                            <Button variant="secondary" disabled>Disabled</Button>
                        </Stack>
                    </ComponentShowcase>

                    <ComponentShowcase variant="info" label="Info & Link">
                        <Stack gap="sm">
                            <Button variant="info">Info Button</Button>
                            <Button variant="primary" fullWidth>Full Width</Button>
                        </Stack>
                    </ComponentShowcase>

                    <ComponentShowcase variant="dark" label="Icon Buttons">
                        <Stack gap="sm">
                            <Button size="sm">🔍 Search</Button>
                            <Button size="sm">⭐ Save</Button>
                            <Button size="sm">📤 Share</Button>
                        </Stack>
                    </ComponentShowcase>
                </Grid>
            </Section>

            {/* Avatars Section */}
            <Section title="Avatars" subtitle="Identity and profile representations">
                <Card className={styles.contentCard}>
                    <Stack gap="lg">
                        <div className={styles.avatarShowcase}>
                            <Stack gap="sm" align="center">
                                <Avatar name="Alex Morgan" size="sm" />
                                <Text variant="body-sm">Small</Text>
                            </Stack>
                            <Stack gap="sm" align="center">
                                <Avatar name="Jordan Lee" size="md" />
                                <Text variant="body-sm">Medium</Text>
                            </Stack>
                            <Stack gap="sm" align="center">
                                <Avatar name="Taylor Smith" size="lg" />
                                <Text variant="body-sm">Large</Text>
                            </Stack>
                        </div>
                        <Divider />
                        <div className={styles.profileRow}>
                            <Avatar name="Priya Sharma" size="md" />
                            <Stack gap="sm">
                                <Text variant="heading-3">Priya Sharma</Text>
                                <Text variant="body-sm">Design systems lead</Text>
                            </Stack>
                            <Badge variant="success">Online</Badge>
                        </div>
                    </Stack>
                </Card>
            </Section>

            {/* Badges Section */}
            <Section title="Badges" subtitle="Status indicators and labels">
                <Card className={styles.contentCard}>
                    <Stack gap="lg">
                        <div>
                            <Text variant="heading-3" className={styles.subsectionTitle}>Status Badges</Text>
                            <div className={styles.badgeContainer}>
                                <Badge variant="default">Default</Badge>
                                <Badge variant="success">Success</Badge>
                                <Badge variant="warning">Warning</Badge>
                                <Badge variant="danger">Error</Badge>
                                <Badge variant="default-inverse">Default</Badge>
                                <Badge variant="success-inverse">Success</Badge>
                                <Badge variant="warning-inverse">Warning</Badge>
                                <Badge variant="danger-inverse">Error</Badge>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <Text variant="heading-3" className={styles.subsectionTitle}>Use Cases</Text>
                            <Stack gap="sm">
                                <div className={styles.badgeRow}>
                                    <Text variant="body">Status: </Text>
                                    <Badge variant="success">Active</Badge>
                                </div>
                                <div className={styles.badgeRow}>
                                    <Text variant="body">Priority: </Text>
                                    <Badge variant="danger">High</Badge>
                                </div>
                                <div className={styles.badgeRow}>
                                    <Text variant="body">Tag: </Text>
                                    <Badge variant="default">Featured</Badge>
                                </div>
                            </Stack>
                        </div>
                    </Stack>
                </Card>
            </Section>

            {/* Alerts Section */}
            <Section title="Alerts" subtitle="Feedback and messaging">
                <Stack gap="md">
                    <Alert type="info" message="This is an informational message - perfect for tips and helpful information" />
                    <Alert type="success" message="Success! Your action has been completed successfully" />
                    <Alert type="warning" message="Warning! Please review this important notification" />
                    <Alert type="error" message="Error! Something went wrong. Please try again" />
                </Stack>
            </Section>

            {/* Form Components Section */}
            <Section id="forms" title="Form Components" subtitle="Input controls and interactive elements">
                <Grid columns={2} gap="lg">
                    <Card className={styles.formCard}>
                        <Stack gap="lg">
                            <Text variant="heading-3">Text Inputs</Text>
                            <FormField label="Email Address" helperText="We'll never share your email">
                                <Input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </FormField>

                            <FormField label="Message">
                                <Textarea placeholder="Type your message..." rows={4} />
                            </FormField>
                        </Stack>
                    </Card>

                    <Card className={styles.formCard}>
                        <Stack gap="lg">
                            <Text variant="heading-3">Interactive Controls</Text>
                            <FormField label="Choose Framework">
                                <Select
                                    id="framework"
                                    name="framework"
                                    options={selectOptions}
                                    placeholder="Select a framework"
                                    value={formData.framework}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            framework: event.target.value,
                                        })
                                    }
                                />

                            </FormField>

                            <FormField label="Enable Notifications">
                                <Switch
                                    checked={formData.notifications}
                                    onChange={(e) =>
                                        setFormData({ ...formData, notifications: e.target.checked })
                                    }
                                />
                            </FormField>

                            <FormField label="Accept Terms">
                                <Checkbox
                                    checked={formData.terms}
                                    onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                                />
                            </FormField>

                            <FormField label="Preferred plan">
                                <RadioGroup name="plan" defaultValue="starter">
                                    <Stack gap="sm">
                                        <Radio value="starter" label="Starter" />
                                        <Radio value="team" label="Team" />
                                    </Stack>
                                </RadioGroup>
                            </FormField>
                        </Stack>
                    </Card>
                </Grid>
            </Section>

            {/* Cards & Layouts Section */}
            <Section title="Cards & Grid Layouts" subtitle="Flexible layout components">
                <Grid columns={3} gap="md">
                    {[
                        { icon: '🎯', title: 'Component 1', desc: 'Build flexible layouts' },
                        { icon: '🚀', title: 'Component 2', desc: 'Responsive design' },
                        { icon: '💡', title: 'Component 3', desc: 'Best practices' },
                    ].map((item, idx) => (
                        <Card key={idx} className={styles.portfolioCard}>
                            <Stack gap="md" align="center">
                                <div className={styles.cardIcon}>{item.icon}</div>
                                <Text variant="heading-3">{item.title}</Text>
                                <Text variant="body-sm" className={styles.cardDescription}>
                                    {item.desc}
                                </Text>
                                <Button variant="primary" size="sm">Learn More</Button>
                            </Stack>
                        </Card>
                    ))}
                </Grid>
            </Section>

            {/* Lists Section */}
            <Section
                title="Lists"
                subtitle="Organize content effectively"
            >
                <Grid columns={2} gap="lg">
                    <Card className={styles.contentCard}>
                        <Stack gap="lg">
                            <Text variant="heading-3">
                                Features Checklist
                            </Text>

                            <List>
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
                        </Stack>
                    </Card>

                    <Card className={styles.contentCard}>
                        <Stack gap="lg">
                            <Text variant="heading-3">
                                Getting Started Steps
                            </Text>

                            <List ordered>
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
                                    Start building!
                                </List.Item>
                            </List>
                        </Stack>
                    </Card>
                </Grid>
            </Section>


            {/* Interactive Components */}
            <Section title="Interactive Components" subtitle="Advanced UI patterns">
                <Grid columns={3} gap="md">
                    <Card className={`${styles.interactiveCard} ${styles.spinnerCard}`}>
                        <Stack gap="md" align="center">
                            <Text variant="heading-3">Loading State</Text>
                            <div className={styles.spinnerContainer}>
                                <Spinner />
                            </div>
                            <Text variant="body-sm">Indicate ongoing operations</Text>
                        </Stack>
                    </Card>

                    <Card className={`${styles.interactiveCard} ${styles.modalCard}`}>
                        <Stack gap="md" align="center">
                            <Text variant="heading-3">Modal Dialog</Text>
                            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                                Open Modal
                            </Button>
                            <Text variant="body-sm">Overlay content</Text>
                        </Stack>
                    </Card>

                    <Card className={`${styles.interactiveCard} ${styles.drawerCard}`}>
                        <Stack gap="md" align="center">
                            <Text variant="heading-3">Drawer Panel</Text>
                            <Button variant="secondary" onClick={() => setIsDrawerOpen(true)}>
                                Open Drawer
                            </Button>
                            <Text variant="body-sm">Side navigation</Text>
                        </Stack>
                    </Card>
                </Grid>
            </Section>

            {/* Modal Example */}
            {isModalOpen && (
                <Modal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Welcome to Modal Dialog"
                    description="This is an overlay dialog that captures user attention"
                    footer={
                        <Stack direction="row" gap="sm">
                            <Button
                                variant="secondary"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </Button>

                            <Button
                                variant="primary"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Confirm
                            </Button>
                        </Stack>
                    }
                >
                    <Alert
                        type="info"
                        message="Modals are great for confirmations, forms, or important notices"
                    />
                </Modal>
            )}

            {/* Drawer Example */}
            {isDrawerOpen && (
                <Drawer open={true} onClose={() => setIsDrawerOpen(false)}>
                    <Card className={styles.drawerContent}>
                        <Stack gap="lg">
                            <div>
                                <Text as="h2" variant="heading-2">Navigation Drawer</Text>
                                <Text variant="body-sm" className={styles.drawerSubtitle}>
                                    Side panel for navigation, filters, or additional content
                                </Text>
                            </div>
                            <List variant="menu">
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
                            <Button variant="primary" onClick={() => setIsDrawerOpen(false)} fullWidth>
                                Close Drawer
                            </Button>
                        </Stack>
                    </Card>
                </Drawer>
            )}

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <Stack gap="md" align="center">
                    <Text variant="heading-2" weight="bold" color="light">Ready to Build?</Text>
                    <Text variant="body-lg" className={styles.ctaText}>
                        Start using these components in your project today
                    </Text>
                    <Stack direction="row" gap="md">
                        <Button variant="primary">Get Started</Button>
                        <Button variant="secondary">View Docs</Button>
                    </Stack>
                </Stack>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <Stack gap="md" align="center">
                    <Text variant="heading-3">React Design System</Text>
                    <Text variant="body-sm">
                        Created by Snezhana Dosinova • Built with Vite, React & TypeScript
                    </Text>

                    <Divider />
                    <div>
                        <Text variant="body-sm">© 2026 • All rights reserved</Text>
                    </div>
                </Stack>
            </footer>
        </main>
    );
}

// Helper Components
function Section({
    id,
    title,
    subtitle,
    children,
}: {
    id?: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className={styles.section}>
            <Stack gap="sm" className={styles.sectionHeader}>
                <Text variant="heading-2" className={styles.sectionTitle}>
                    {title}
                </Text>
                {subtitle && (
                    <Text variant="body" className={styles.sectionSubtitle}>
                        {subtitle}
                    </Text>
                )}
            </Stack>
            {children}
        </section>
    );
}

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: string;
    title: string;
    description: string;
}) {
    return (
        <Card className={styles.featureCard}>
            <Stack gap="md" align="center">
                <div className={styles.featureIcon}>{icon}</div>
                <Text variant="heading-3" className={styles.featureTitle}>
                    {title}
                </Text>
                <Text variant="body-sm" className={styles.featureDesc}>
                    {description}
                </Text>
            </Stack>
        </Card>
    );
}

function ComponentShowcase({
    variant,
    label,
    children,
}: {
    variant: string;
    label: string;
    children: React.ReactNode;
}) {
    const variantColors: Record<string, string> = {
        primary: styles.showcasePrimary,
        secondary: styles.showcaseSecondary,
        success: styles.showcaseSuccess,
        accent: styles.showcaseAccent,
        info: styles.showcaseInfo,
        dark: styles.showcaseDark,
    };

    return (
        <Card className={`${styles.showcase} ${variantColors[variant] || ''}`}>
            <Stack gap="md">
                <Text variant="heading-3" className={styles.showcaseLabel}>
                    {label}
                </Text>
                {children}
            </Stack>
        </Card>
    );
}
