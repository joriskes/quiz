FROM node:alpine
EXPOSE 3000
WORKDIR /frontend
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY ./ ./
CMD ["npm", "run", "dev"]