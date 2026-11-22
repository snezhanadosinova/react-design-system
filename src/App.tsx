import { DocumentationPage } from "./pages/DocumentationPage";
import { GettingStartedPage } from "./pages/GettingStartedPage";
import { HomePage } from "./pages/HomePage";

export function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/getting-started") return <GettingStartedPage />;
  if (pathname === "/docs") return <DocumentationPage />;
  return <HomePage />;
}
