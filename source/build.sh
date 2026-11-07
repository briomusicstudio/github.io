#!/bin/sh
# Збірка: npm install && sh build.sh  → результат у папці dist/
set -e
rm -rf dist && mkdir -p dist/assets
npx tailwindcss -c tailwind.config.js -i src/styles.css -o dist/assets/style.css --minify
npx esbuild src/app.jsx --bundle --minify --format=iife --target=es2019 --loader:.mp3=dataurl --loader:.jsx=jsx \
  --define:process.env.NODE_ENV='"production"' --outfile=dist/assets/app.js
V=$(date +%s) # версія в адресі файлів: після оновлення на GitHub браузер не покаже старий кеш
sed "s#assets/app.js#assets/app.js?v=$V#; s#assets/style.css#assets/style.css?v=$V#" index.template.html > dist/index.html
cp assets/logo.svg assets/social-preview.png dist/assets/
cp robots.txt sitemap.xml dist/
touch dist/.nojekyll
ls -la dist dist/assets
