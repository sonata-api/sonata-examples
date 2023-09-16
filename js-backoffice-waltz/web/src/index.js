import { useApp, useStore, routes, WMain } from 'waltz-ui'
import waltzPtbr from '@waltz-ui/i18n-ptbr'
import '../static/main.css'
import '@waltz-ui/ui/style.css'
import 'waltz-tailwind-layout/style.css'

const options = {
  component: WMain,
  routes,
  i18n: {
    locale: 'pt_BR',
    messages: {
      pt_BR: waltzPtbr
    }
  },
  menuSchema: {
    start: {
      meta: {
        title: 'Início',
        icon: 'home'
      },
      children: [
        '/dashboard/animal',
        '/dashboard/user'
      ]
    }
  }
}

useApp(options).then(async (app) => {
  const metaStore = useStore('meta')
  await metaStore.$actions.describe()

  app.mount()
})
