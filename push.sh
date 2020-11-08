#! /bin/bash

user="root"
server="106.15.248.99"

yarn build
ssh "$user@$server" 'cd /var/www/emoji.com && rm -rf dist'
scp -r "dist" "root@106.15.248.99:/var/www/emoji.com"
