import fs from "node:fs";
import path from "node:path";

import puppeteer from "puppeteer";

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const outDir = path.resolve("docs/screenshots");

const routes = [
  ["payment-entry", "/payment-entry"],
  ["donation", "/donation"],
  ["result-states", "/result-states"],
  ["account-summary", "/account-summary"],
  ["support-override", "/support-override"],
];

fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1600, deviceScaleFactor: 1 });

for (const [name, route] of routes) {
  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle0" });
  await page.screenshot({
    path: path.join(outDir, `${name}.png`),
    fullPage: true,
  });
}

await browser.close();
