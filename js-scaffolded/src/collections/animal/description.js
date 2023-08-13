module.exports = {
  $id: 'string',
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
}
