import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
