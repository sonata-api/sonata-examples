const { baseRoles } = require('sonata-api')

module.exports = {
  roles: {
    unauthenticated: baseRoles.unauthenticated,
    guest: {
      inherit: [
        'unauthenticated'
      ],
      capabilities: {
        animal: {
          grantEverything: true
        }
      }
    }
  }
}
