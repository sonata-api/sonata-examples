const { baseRoles } = require('sonata-api')

module.exports = {
  roles: {
    unauthenticated: baseRoles.unauthenticated,
    root: {
      grantEverything: true
    },
    guest: {
      inherit: [
        'unauthenticated'
      ],
      capabilities: {
        animal: {
          functions: [
            'get',
            'getAll'
          ]
        }
      }
    }
  }
}
