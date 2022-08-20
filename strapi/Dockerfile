FROM node:alpine

RUN apk add g++ make py3-pip

EXPOSE 1337
WORKDIR /strapi
COPY package.json ./
COPY package-lock.json ./
RUN npm i

COPY ./ ./

CMD ["npm", "run", "develop"]