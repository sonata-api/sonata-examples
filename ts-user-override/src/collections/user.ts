import {
  type Schema,
  defineDescription,
  createModel,
  deepMerge,
  user as oldUser,
  userSchemaCallback

} from 'sonata-api'

const newDescription = <const>{
  properties: {
    document: {
      description: 'Document (this property is being added)',
      type: 'string',
    },
  },
}

const [NewUser] = defineDescription(newDescription)

export type User = Awaited<ReturnType<typeof oldUser>>['item'] & typeof NewUser

export const user = async () => {
  const userCollection = await oldUser()
  const description =
    userCollection.description as (typeof userCollection)['description'] &
    typeof newDescription

  Object.assign(
    description,
    deepMerge(description, {
      ...newDescription,
      form: [
        'document'
      ],
    })
  )

  return {
    item: {} as Schema<typeof description>,
    description,
    functions: userCollection.functions,
    model: () => {
      return createModel(description, {
        schemaCallback: userSchemaCallback as any,
      })
    },
  }
}
