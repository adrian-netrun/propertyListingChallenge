# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7


FROM node:23-alpine

WORKDIR /

COPY package.json .

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "run", "dev"]

