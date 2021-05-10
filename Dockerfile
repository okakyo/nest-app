
FROM node:14.2-alpine as base

WORKDIR /apps/base

RUN apk add --no-cache python musl-dev gcc make g++ file alpine-sdk && \
    python -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip install --upgrade pip setuptools && \
    rm -r /root/.cache

COPY package-lock.json .

COPY package.json .

RUN npm ci

FROM node:14.2-alpine as builder

WORKDIR /apps/builder

RUN rm -rf node_modules

COPY --from=base /apps/base/node_modules ./node_modules

RUN npm run build

FROM node:14.2-alpine as production

WORKDIR /apps/production

RUN rm -rf node_modules

COPY --from=builder /apps/builder/node_modules .
COPY --from=builder /apps/builder/dist .

CMD [ "sh","-c","npm run start" ]