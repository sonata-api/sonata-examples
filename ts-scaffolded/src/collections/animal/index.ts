import { useFunctions } from 'sonata-api'
import { description, Animal } from './description'
import { hello } from './hello'

export const animal = () => ({
  item: {} as typeof Animal,
  description,
  functions: {
    ...useFunctions<typeof Animal>()([
      'getAll',
      'insert'
    ]),
  }
})
