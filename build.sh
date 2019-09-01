#!/usr/bin/env bash

echo "[>]building..."
npm run build
echo "[>]moving..."
cp -R build/* .
rm -r build
echo "[>]deleting..."
rm -v 200.html service-worker.js precache* asset-manifest.json
rm -v static/js/runtime* src/css/*.map static/css/*.map static/js/*.map
echo "[>]done!"