FROM node:18.16-alpine3.17
COPY ["package*.json","./app", "/app"]
WORKDIR /app
RUN npm install
EXPOSE 8088
CMD [ "node", "demo.js" ]
