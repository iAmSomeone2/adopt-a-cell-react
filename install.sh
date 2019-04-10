#!/bin/bash

echo Running build...
npm run build
echo Copying build files to prod...
cp -r build/* /var/www/cell.bdavidson.dev/html/
echo Restarting nginx...
systemctl restart nginx
echo DONE!
echo # Just outputting a blank line.