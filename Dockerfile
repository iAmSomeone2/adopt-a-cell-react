FROM node:lts-alpine

# Create the needed directories, make sure git is installed, clone the repo,
# and move the repo to the node user's app directory.
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app \
    && apk add --no-cache --virtual git \
    && git clone -b docker https://github.com/iAmSomeone2/adopt-a-cell-react.git ./cell-app/ \
    && mv -R ./cell-app/ /home/node/app

# Change to the app directory and execute the following commands as node.
WORKDIR /home/node/app
USER node

# Install the app dependencies and build the app.
RUN npm install \ 
    && npm run build \
    && npm install -g serve

# Expose port 8080
EXPOSE 8080

CMD ["serve", "-s", "build"]