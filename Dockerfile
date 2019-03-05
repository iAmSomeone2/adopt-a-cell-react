FROM node:lts-alpine as BUILD

# Create the needed directories, make sure git is installed, clone the repo,
# and move the repo to the node user's app directory.
RUN apk add --no-cache git \
    && git clone -b docker https://github.com/iAmSomeone2/adopt-a-cell-react.git ./app/ \
    && apk del git \
    && mv -f ./app/ /home/node/ \
    && chown -R node:node /home/node/app \
    && npm install -g --production serve

# Change to the app directory and execute the following commands as node.
WORKDIR /home/node/app
USER node

# Install the app dependencies and build the app.
RUN npm install \
    && npm run build

# Create the shrunken production image
FROM node:lts-alpine as PROD

RUN mkdir -p /home/node/app \
    && chown -R node:node /home/node/app \
    && npm install -g serve

COPY --from=BUILD /home/node/app/build /home/node/app/build

WORKDIR /home/node/app
USER node

# Expose port 5000 and start the server when the container starts
EXPOSE 5000
CMD ["serve", "-s", "build"]