#!/bin/bash
concurrently \
  "cd rabbitmq && npm run start:dev" \
  "cd rabbitmq-producer && npm run start:dev" 