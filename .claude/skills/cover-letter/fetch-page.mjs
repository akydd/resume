#!/usr/bin/env node
// Usage: node fetch-page.mjs <url>
// Fetches a page using a headless Chromium browser and prints visible text content.
// Exits with code 1 and prints BLOCKED if the page is bot-protected.
import { chromium } from 'playwright';

const url = process.argv[2];
if (!url) { console.error('Usage: node fetch-page.mjs <url>'); process.exit(1); }

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9' },
});
const page = await context.newPage();
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
await page.waitForTimeout(2000);
const text = await page.evaluate(() => document.body.innerText);
await browser.close();

const blocked = text.includes('Request Blocked') || text.includes('You have been blocked') || (text.includes('Cloudflare') && text.length < 500);
if (blocked) { console.error('BLOCKED'); process.exit(1); }
console.log(text.slice(0, 8000));
