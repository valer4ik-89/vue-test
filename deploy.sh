#!/usr/bin/env sh

set -e

npm run build

cd dist

git init 
git add -A
git commit -m "New Deployment"
git push -f git@github.com:valer4ik-89/vue-test.git main:gh-pages

cd -