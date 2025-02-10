import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "./routes";
import { Toaster } from "sonner";
import "./index.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
