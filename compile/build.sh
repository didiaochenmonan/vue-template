#!/usr/bin/env bash

echo "start compile hsa-spp-static"

rm -rf static
rm -f static.zip
mkdir static
mkdir static/www
cp -r dist/* static/www/
cp tencent-five/* static/
zip -r static.zip static/
