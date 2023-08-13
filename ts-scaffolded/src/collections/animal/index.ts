import { useFunctions } from 'sonata-api'
import { description, Animal } from './description'

export const animal = () => ({
  item: {} as typeof Animal,
  description,
  functions: {
    ...useFunctions<typeof Animal>()([
      'getAll',
      'insert'
    ]),
    hello: (name: string) => `Hello, ${name}!`
  }
})
