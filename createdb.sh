#!/bin/sh

source $PWD/.env

if ./startdb.sh ; then
    echo "Waiting 5 seconds to initialize the db..."
    sleep 5
    psql -h localhost -U postgres -c "CREATE DATABASE $POSTGRES_NAME"
    psql -h localhost -U postgres -c "CREATE USER $POSTGRES_USER"
    psql -h localhost -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_NAME TO $POSTGRES_USER"
else
    echo "Failed to start the db container..."
fi