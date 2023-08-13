import { defineAccessControl } from 'sonata-api'

export const accessControl = defineAccessControl<Collections, Algorithms>()({
  roles: {
    guest: {
      capabilities: {
        animxal: {
          grantEverything: true
        }
      }
    }
  }
})()
