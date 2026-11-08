#!/usr/bin/env python3
"""Створює ../site/social-preview.png (1200x630) із social-preview.html.
Потрібно: pip install playwright && playwright install chromium"""
from pathlib import Path
from playwright.sync_api import sync_playwright
here = Path(__file__).parent
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1200, "height": 630})
    pg.goto((here / "social-preview.html").resolve().as_uri())
    pg.wait_for_timeout(500)
    pg.screenshot(path=str(here.parent / "site" / "social-preview.png"))
    b.close()
print("OK: site/social-preview.png")
