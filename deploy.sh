#!/bin/bash

ssh root@95.85.43.196 <<'ENDSSH'
    cd /var/www/cssgrid.pro
    git reset --hard HEAD
    git pull origin master
    npm install
    npm run build
ENDSSH
