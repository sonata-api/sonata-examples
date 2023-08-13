const { init } = require('sonata-api/untyped')

const { collections } = require('./collections')
const { accessControl } = require('./infrastructure')

module.exports = {
  accessControl,
  collections
}

init()
