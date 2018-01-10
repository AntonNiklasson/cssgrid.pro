#!/bin/bash

ssh root@95.85.43.196 <<'ENDSSH'
    cd /var/www/prylar-api
    git reset --hard HEAD
    git pull --rebase origin master
    yarn
    npm run production
ENDSSH
