FROM node:lts-alpine

RUN apk update

ARG MODE

ENV ENV_MODE=$MODE

ENTRYPOINT sh /app/docker/entrypoint.sh $ENV_MODE ${APP_PORT:-3000}