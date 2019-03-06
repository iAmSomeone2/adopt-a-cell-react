FROM node:lts-alpine as BUILD

# Create the needed directories, make sure git is installed, clone the repo,
# and move the repo to the node user's app directory.
RUN apk add --no-cache git \
    && git clone -b docker-slim https://github.com/iAmSomeone2/adopt-a-cell-react.git ./app/ \
    && apk del git \
    && mv -f ./app/ /home/node/ \
    && chown -R node:node /home/node/app

# Change to the app directory and execute the following commands as node.
WORKDIR /home/node/app
USER node

# Install the app dependencies and build the app.
RUN npm install \
    && npm run build

# Create the shrunken production image
FROM nginx:mainline-alpine as PROD

RUN mkdir -p /var/www/app \
    && rm /etc/nginx/sites-available/default

COPY --from=BUILD /home/node/app/build /var/www/app/build
COPY --from=BUILD /home/node/app/nginx_config/default /etc/nginx/sites_available/default

# WORKDIR /home/node/app

# Expose port 80 and start the server when the container starts
EXPOSE 80
