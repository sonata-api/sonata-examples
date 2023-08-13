import { init } from 'sonata-api'

export const accessControl = {
  roles: {
    guest: {
      grantEverything: true
    }
  }
}

export * as collections from './collections'
export const algorithms = {}

init()
