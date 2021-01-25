FROM node:14.2-alpine as build

RUN apk add --no-cache python musl-dev gcc make g++ file alpine-sdk && \
    python -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip install --upgrade pip setuptools && \
    rm -r /root/.cache


COPY package-lock.json /app/package-lock.json

COPY package.json /app/package.json

WORKDIR /app

RUN npm ci

FROM node:14.2-slim

WORKDIR /app

COPY . /app

RUN rm -rf node_modules

COPY --from=build /app/node_modules /app/node_modules

CMD ["sh","-c","npm run build"]
