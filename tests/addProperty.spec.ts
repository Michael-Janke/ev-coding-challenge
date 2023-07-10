import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "Add Property" }).click();
  await page.getByLabel("Property Title").click();
  await page.getByLabel("Property Title").fill("TEST");
  await page.getByLabel("Address").click();
  await page.getByLabel("Address").fill("TESTADDRESS");
  await page.getByRole("combobox", { name: "Type" }).selectOption("apartment");
  await page
    .locator("div")
    .filter({ hasText: /^Price€$/ })
    .getByRole("spinbutton")
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^Price€$/ })
    .getByRole("spinbutton")
    .fill("1000");
  await page
    .locator("div")
    .filter({ hasText: /^Price€$/ })
    .getByRole("spinbutton")
    .press("Tab");
  await page.getByLabel("Rooms").fill("20");
  await page.getByLabel("Rooms").press("Tab");
  await page.getByLabel("Floor").fill("1");
  await page.getByRole("button", { name: "Submit" }).click();
});
