# Скрипковий ключ — Brio Music Studio

## Оновити сайт, який уже є на GitHub Pages
1. Відкрийте свій репозиторій на github.com → **Add file → Upload files**.
2. Розпакуйте архів і перетягніть **вміст папки `site/`** (`index.html`, `assets/`, `robots.txt`, `sitemap.xml`, `.nojekyll`) у вікно браузера. Файли з тими самими назвами замінять старі.
3. Натисніть **Commit changes**.
4. Зачекайте 1–10 хвилин і відкрийте сайт. Якщо бачите стару версію, натисніть Ctrl+Shift+R.

Налаштовувати Pages заново не треба. Це робиться один раз.

## Перший запуск на GitHub Pages
Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.

## Зміни в коді
У папці `source/`: `npm install && sh build.sh` → готовий сайт у `dist/`. Збірка додає нову версію адрес CSS/JS, щоб браузер оновив кеш.
Піаніно-семпли C4–B4 (`source/src/audio`): FluidR3_GM у збірці gleitz/midi-js-soundfonts (MIT).

## SEO та поширення
У `index.html` налаштовано canonical URL, опис, Open Graph, Twitter Card і структуровані дані. Картка для поширення — `site/assets/social-preview.png` (1200 × 630); її вихідний файл — `source/assets/social-preview.png`. Іконка вкладки залишена без змін. Файли `robots.txt` і `sitemap.xml` допомагають пошуковим системам знаходити сайт.
