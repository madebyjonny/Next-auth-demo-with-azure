FROM node:20.04

WORKDIR /user/app

COPY . . 

RUN npm ci

RUN npm run build

CMD ["npm", "start"]