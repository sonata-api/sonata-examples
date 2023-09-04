import { useApp, useStore, routes } from 'waltz-ui'
import '@waltz-ui/ui/style.css'
import '../static/main.css'
import Main from './main.vue'

const options = {
  component: Main,
  routes
}

useApp(options).then(async (app) => {
  const metaStore = useStore('meta')
  await metaStore.$actions.describe()

  app.mount()
})
