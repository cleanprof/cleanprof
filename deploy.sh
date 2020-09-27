#!/usr/bin/env sh

# abort on errors
set -e

# head to build folder
cd build

# commit changes
git init
git add -A
git commit -m 'deploy'

# push to remote : gh-pages branch
git push -f git@github.com:cleanprof/cleanprof.git master:gh-pages