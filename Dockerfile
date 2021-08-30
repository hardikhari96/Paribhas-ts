FROM node:12
RUN npm install --global typescript ts-node nodemon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run dev
EXPOSE 8000
