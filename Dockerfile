# build stage
FROM node:12 AS build
USER root
RUN mkdir /home/node/code
WORKDIR /home/node/code
# Only rebuild image when package.json is changed
COPY --chown=node:node package-lock.json package.json ./
RUN npm ci 
# && npm ci @cmfcmf/docusaurus-search-local
COPY . .
RUN npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=build ./home/node/code/build /usr/share/nginx/html
EXPOSE 80