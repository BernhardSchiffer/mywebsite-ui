# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine

COPY --from=build-stage app/dist/mywebsite-ui /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#COPY ./localhost.key.pem /etc/nginx/ssl/ssl-key.pem
#COPY ./localhost.pem /etc/nginx/ssl/ssl.pem

EXPOSE 80
EXPOSE 443