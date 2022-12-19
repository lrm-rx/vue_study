import { App } from 'vue'
import SelectIcom from './selectIcon'
import SelectArea from './selectArea'
import SelectAreaFour from './selectAreaFour'
import RmTrend from './trend'
import RmNotification from './notification'
import RmList from './list'
import RmMenu from './menu'
import RmProgress from './progress'
import SelectTime from './selectTime'
import SelectDate from './selectDate'
import SelectCity from './selectCity'

const components = [
  SelectIcom,
  SelectArea,
  SelectAreaFour,
  RmTrend,
  RmNotification,
  RmList,
  RmMenu,
  RmProgress,
  SelectTime,
  SelectDate,
  SelectCity
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}