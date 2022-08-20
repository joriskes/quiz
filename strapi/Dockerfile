FROM node:16
EXPOSE 1337
WORKDIR /strapi
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "develop"]