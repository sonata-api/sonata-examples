const { useFunctions } = require('sonata-api/untyped')
const description = require('./description')

module.exports = {
  description,
  functions: {
    ...useFunctions([
      'getAll',
      'insert'
    ]),
    hello: () => 'Hello, world!'
  }
}
