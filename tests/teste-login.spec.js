import { test, expect } from "@playwright/test";

//import { CredenciaisHelper } from "../CredenciaisHelper";

test("teste de login 1 @login", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("myAPI")).toBeVisible();
});

test("teste de login 2 @login", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("myAPI")).toBeVisible();
});
