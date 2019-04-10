#!/bin/bash

npm run build
cp build/* /var/www/cell.bdavidson.dev/html/
systemctl restart nginx