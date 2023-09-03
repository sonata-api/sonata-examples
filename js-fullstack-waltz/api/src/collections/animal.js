const { useFunctions } = require('sonata-api/untyped')

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
      },
      is_docile: {
        type: 'boolean'
      }
    }
  },
  functions: useFunctions([
    'getAll',
    'insert',
    'remove'
  ]),
})
