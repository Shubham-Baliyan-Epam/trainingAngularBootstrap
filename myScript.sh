#!/bin/sh
#npm install
sudo rm -r dist/
npm run build --prod
sudo rm -r /var/www/$1
sudo cp -r dist/ /var/www/$1
echo "$1 done"
echo "build ready"