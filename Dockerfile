FROM node:14.1.0-alpine3.11

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN npm install --silent

CMD ["npm", "start"]
