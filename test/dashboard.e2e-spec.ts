import { test, expect } from "@playwright/test";

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("20", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("-5% em relação a ontem")).toBeVisible();
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("200", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("+15% em relação ao mês passado")).toBeVisible();
});

test("display month cancelled amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("20", { exact: true }).nth(1)).toBeVisible();
  await expect(page.getByText("-3% em relação ao mês passado")).toBeVisible();
});

test("display month revenue metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("R$ 22,20")).toBeVisible();
  await expect(page.getByText("+200% em relação ao mês")).toBeVisible();
});
