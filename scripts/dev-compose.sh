#!/bin/bash

if [[ $1 = "down" ]]; then
    docker-compose -f base.yaml -f postgres.yaml down
else
    docker-compose -f base.yaml -f postgres.yaml up --build
fi