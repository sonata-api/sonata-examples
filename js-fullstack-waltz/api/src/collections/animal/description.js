module.exports = {
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
}
