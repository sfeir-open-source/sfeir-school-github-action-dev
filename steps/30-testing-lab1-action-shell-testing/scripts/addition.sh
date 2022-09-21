#!/usr/bin/env bash

if [ $# -lt 2 ]; then
  echo "command line arguments are missing"
  exit 3
else
  echo $(($1 + $2))
fi
