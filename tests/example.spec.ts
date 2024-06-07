import { test, expect } from "@playwright/test";

test("Has navbar links", async ({ page }) => {
  await page.goto("https://www.oska-health.com/");

  await page.getByRole("link", { name: "Patient:innen" }).click();
});
