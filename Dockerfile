FROM node:18.16-alpine3.17

RUN mkdir -p /app/node_modules && chown -R node:node: /app

WORKDIR /app
COPY  --chown=node:node ./app /app

USER node

RUN npm install

EXPOSE 8088

CMD [ "node", "demo.js" ]
