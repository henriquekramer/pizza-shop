import { Helmet, HelmetProvider } from "react-helmet-async";
import { Router } from "./routes";
import "./index.css";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Router />
    </HelmetProvider>
  );
}
