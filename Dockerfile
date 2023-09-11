FROM node:20-alpine3.17

WORKDIR /user/app

COPY . . 

RUN npm ci

RUN npm run build

CMD ["npm","run", "start"]