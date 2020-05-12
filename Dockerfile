FROM node:14.1.0-alpine3.11

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

COPY . ./
CMD ["npm", "start"]
