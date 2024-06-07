import { test, expect } from "@playwright/test";

test("Has navbar links", async ({ page }) => {
  await page.goto("https://www.oska-health.com/");
  await page.getByTestId("uc-accept-all-button").click();

  await page
    .locator("header")
    .getByRole("link", { name: "Patient:innen" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Das bietet Ihnen Oska" })
  ).toBeVisible();
});
