import { defineDescription } from 'sonata-api'

export const [Animal, description] = defineDescription({
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
})
