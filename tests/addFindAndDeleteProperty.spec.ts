import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  const randomTestId = Math.floor(Math.random() * 1000000);

  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "Add Property" }).click();
  await page.getByLabel("Property Title").click();
  await page.getByLabel("Property Title").fill("Test" + randomTestId);
  await page.getByLabel("Property Title").press("Tab");
  await page.getByLabel("Address").fill("TestAddress");
  await page.getByLabel("Address").press("Tab");
  await page.getByRole("combobox", { name: "Type" }).press("ArrowDown");
  await page.getByRole("combobox", { name: "Type" }).selectOption("apartment");
  await page.getByRole("combobox", { name: "Type" }).press("Tab");
  await page
    .locator("div")
    .filter({ hasText: /^Price€$/ })
    .getByRole("spinbutton")
    .fill("100");
  await page
    .locator("div")
    .filter({ hasText: /^Price€$/ })
    .getByRole("spinbutton")
    .press("Tab");
  await page.getByLabel("Rooms").fill("2");
  await page.getByLabel("Rooms").press("Tab");
  await page.getByLabel("Floor").fill("2");
  await page.getByLabel("Floor").press("Tab");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("Test" + randomTestId);
  await page
    .locator("div")
    .filter({ hasText: new RegExp("^Test" + randomTestId + "$", "g") })
    .getByRole("button", { name: "Close" })
    .click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: new RegExp("^Test" + randomTestId + "$", "g") })
      .getByRole("button", { name: "Close" })
  ).toHaveCount(0);
});
