FROM node:latest

WORKDIR /app

COPY package.json  ./

COPY src/ .

RUN npm install

CMD ["npm", "run" , "dev"]

EXPOSE 3000


