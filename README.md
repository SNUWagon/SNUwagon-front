# SNUwagon

[![Build Status](https://travis-ci.org/SNUWagon/SNUwagon-front.svg?branch=master)](https://travis-ci.org/SNUWagon/SNUwagon-front)  [![codecov](https://codecov.io/gh/SNUWagon/SNUwagon-front/branch/master/graph/badge.svg)](https://codecov.io/gh/SNUWagon/SNUwagon-front)

SNUwagon frontend

## Local setting

```
npm install
cp pre-commit .git/hooks/
```

## Run

```
# default port is 3000
npm start

# run on other port or host
PORT=<port> HOST=<host> npm start
```

## Testing (CI / coverage)

```
# code syntax check
npm run lint

# coverage check
npm run coverage
```
