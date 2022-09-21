#!/usr/bin/env bash

if [ $# -lt 2 ]; then
  echo "command line arguments are missing"
  exit 3
else
  if [ "$1" != "$(($1))" ]; then
    echo "$1 is not a number"
    exit 4
  fi
  if [ "$2" != "$(($2))" ]; then
    echo "$1 is not a number"
    exit 5
  fi
  echo $(($1 + $2))
fi
