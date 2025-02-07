import { Helmet, HelmetProvider } from "react-helmet-async";
import { Router } from "./routes";
import { Toaster } from "sonner";
import "./index.css";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <Router />
      </ThemeProvider>
    </HelmetProvider>
  );
}
