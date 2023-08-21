const { useFunctions } = require('sonata-api/untyped')
const { hello } = require('./hello')

module.exports = () => ({
  description: {
    $id: 'animal',
    properties: {
      name: {
        type: 'string'
      },
      specie: {
        enum: [
          'dog',
          'cat',
          'bird'
        ]
      }
    }
  },
  functions: {
    ...useFunctions([
      'getAll',
      'insert'
    ]),
    hello
  }
})
