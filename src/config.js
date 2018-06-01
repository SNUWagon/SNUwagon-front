const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    apiUrl: '/api',
  },
  test: {},
  development: {},
  production: {
    apiUrl: '/api',
  },
}

module.exports = merge(config.all, config[config.all.env])
