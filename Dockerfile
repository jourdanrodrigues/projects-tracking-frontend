FROM node:9.2

WORKDIR /app/

COPY . .

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.3.2
RUN yarn install --silent

CMD ["yarn", "start"]
