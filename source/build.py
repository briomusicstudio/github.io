#!/usr/bin/env python3
"""Збірка: збирає ../site/index.html із шаблону, стилів і скрипта.
Запуск:  python3 build.py
Редагуйте SEO-тексти (title, description, OG) у index.template.html,
потім запустіть збірку й залийте вміст папки ../site/ на GitHub."""
from pathlib import Path
here = Path(__file__).parent
site = here.parent / "site"
tpl = (here / "index.template.html").read_text(encoding="utf-8")
css = (here / "style.css").read_text(encoding="utf-8")
js = (here / "app.js").read_text(encoding="utf-8")
html = tpl.replace("{{CSS}}", css, 1).replace("{{JS}}", js, 1)
(site / "index.html").write_text(html, encoding="utf-8")
print(f"OK: {site/'index.html'} ({len(html.encode())//1024} KB)")
