#!/bin/sh

source $PWD/.env

mkdir -p .db

podman run \
  -d --name spacedb \
  -p 5432:5432/tcp \
  -e POSTGRES_PASSWORD=$POSTGRES_PASS \
  -e PGDATA=/var/lib/posgresql/data/pgdata \
  -v .db:/var/lib/postgresql/data \
  -d docker.io/library/postgres:latest