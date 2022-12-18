import { App } from 'vue'
import SelectIcom from './selectIcon'
import SelectArea from './selectArea'
import RmTrend from './trend'
import RmNotification from './notification'
import RmList from './list'

const components = [
  SelectIcom,
  SelectArea,
  RmTrend,
  RmNotification,
  RmList
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}