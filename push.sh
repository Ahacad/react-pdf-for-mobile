#! /bin/bash

ssh root@106.15.248.99 'cd /var/www/emoji.com && rm -rf dist'
scp -r "dist" "root@106.15.248.99:/var/www/emoji.com"
