const { init, useFunctions } = require('sonata-api/untyped')

module.exports = {
  accessControl: {
    roles: {
      guest: {
        capabilities: {
          animal: {
            grantEverything: true
          }
        }
      }
    }
  },
  collections: {
    animal: () => ({
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
          'insert',
          'getAll'
        ]),
        hello: () => 'hello, world'
      }
    })
  }
}

init()
