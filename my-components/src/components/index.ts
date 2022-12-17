import { App } from 'vue'
import SelectIcom from './selectIcon'
import SelectArea from './selectArea'

const components = [
  SelectIcom,
  SelectArea
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}