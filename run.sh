#!/bin/bash

init_dir=$(dirname "$0")

default() {

    # Check if env file exists
    if [ ! -f .env ]; then
        echo "No .env file found"
        echo "Usage: $0 [ STAGING | PRODUCTION ] [ dev | build | start ]"
        exit 1
    fi
        
    source .env

    # Check if default env is set
    if [ -z "$DEFAULT_ENV" ]; then
        echo "No default environment set in .env file"
        echo "Usage: $0 [ STAGING | PRODUCTION ] [ dev | build | start ]"
        exit 1
    fi

    # Check if default mode is set
    if [ -z "$DEFAULT_MODE" ]; then
        echo "No default mode set in .env file"
        echo "Usage: $0 [ STAGING | PRODUCTION ] [ dev | build | start ]"
        exit 1
    fi

    docker compose -f "$init_dir/docker-compose.$DEFAULT_ENV.yml" build --build-arg MODE="$DEFAULT_MODE"
    docker compose -f "$init_dir/docker-compose.$DEFAULT_ENV.yml" up 
    exit 0
}

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
    echo "No argument given. Using default config..."
    default
fi

# Validate $1 (env) - should be "STAGE" or "PROD"
if [ "$1" != "STAGING" ] && [ "$1" != "PRODUCTION" ]; then
    echo "Invalid environment. Use 'STAGING' or 'PRODUCTION'."
    echo "Using default config..."
    default
fi

# Validate $2 (mode) - should be "install", "test", "build", "execute" or "clean"
if [ "$2" != "dev" ] && [ "$2" != "build" ] && [ "$2" != "start" ]; then
    echo "Invalid mode. Use 'dev', 'build' or 'start'."
    echo "Using default config..."
    default
fi

# If parameters are correct, proceed with Docker Compose commands
docker compose -f "$init_dir/docker-compose.$1.yml" build --build-arg MODE="$2"
docker compose -f "$init_dir/docker-compose.$1.yml" up
exit 0