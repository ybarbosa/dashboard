FROM node:10-alpine

WORKDIR /app/frontend

RUN npm install @vue/cli-service@4.4.4

COPY package*.json ./

RUN npm install

COPY ["public", "./public"]
COPY ["src", "./src"]
COPY ["babel.config.js","./"]

EXPOSE 8082

