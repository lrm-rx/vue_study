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
import RmForm from './form'
import ModelForm from './modelForm'
import ProTable from './table'
import Calendar from './calendar'

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
  SelectCity,
  RmForm,
  ModelForm,
  ProTable,
  Calendar
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}