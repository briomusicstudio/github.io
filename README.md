# Скрипковий ключ — Brio Music Studio

Жива версія: https://briomusicstudio.github.io/clef-game/

## Структура
- `site/` — **готовий сайт**. Вміст цієї папки заливається в корінь репозиторію GitHub (`main` / root):
  `index.html`, `social-preview.png`, `robots.txt`, `sitemap.xml`, `.nojekyll`.
  Сайт самодостатній: стилі, шрифти, звуки й логотип вбудовані в `index.html`.
- `source/` — з чого збирається сайт (на GitHub не заливати):
  - `index.template.html` — SEO-теги (title, description, Open Graph) і каркас сторінки
  - `style.css`, `app.js` — стилі та скрипт гри (фіолетово-рожева версія)
  - `social-preview.html` — макет картинки для поширення
  - `build.py`, `make_preview.py` — скрипти збірки

## Як змінити SEO-тексти
1. Відредагуйте `source/index.template.html` (блок між `<title>` і JSON-LD).
2. `cd source && python3 build.py` → оновиться `site/index.html`.
3. Залийте вміст `site/` на GitHub.

## Як змінити картинку для поширення
Відредагуйте `source/social-preview.html`, потім `python3 make_preview.py`
(потрібно `pip install playwright && playwright install chromium`).

## Публікація (GitHub Pages)
Settings → Pages → Deploy from a branch → `main` / `(root)`.
У репозиторії мають бути лише файли з `site/` — старі `app.js`, `style.css`, `logo.svg`
та `*.woff2` у корені видаліть, вони не використовуються.

## Примітка
Вихідний React-код (`app.jsx`) цієї версії відсутній: збірка зроблена з готового JS.
Щоб змінювати логіку гри, потрібен актуальний `app.jsx`.
