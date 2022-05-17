FROM node:16-alpine

COPY package*.json ./

RUN npm install 

WORKDIR /app

COPY . .

EXPOSE 8089

CMD ["npm","start"]