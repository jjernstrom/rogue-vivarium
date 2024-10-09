FROM node:latest AS build

WORKDIR /

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
COPY tsconfig.app.json tsconfig.app.json
COPY tsconfig.node.json tsconfig.node.json
COPY vite.config.ts vite.config.ts
COPY index.html index.html

RUN npm ci

COPY public/ public
COPY src/ src

RUN npm run build


FROM nginx:alpine

COPY --from=build /dist /usr/share/nginx/html