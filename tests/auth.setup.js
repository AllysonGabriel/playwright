// @ts-check

import { test as setup } from "@playwright/test";

import fs from "fs";

const TOKEN_FILEPATH = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("https://my.api.org/");
  await page.getByLabel("Email").fill("vamoha7531@dwriters.com");
  await page.getByLabel("Password").fill("Teste@123");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.waitForTimeout(9000);
  await page.context().storageState({ path: TOKEN_FILEPATH });
});
