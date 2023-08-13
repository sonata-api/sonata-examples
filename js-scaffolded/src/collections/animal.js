const { useFunctions } = require('sonata-api/untyped')

module.exports = {
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
    hello: () => 'Hello, world!'
  }
}
