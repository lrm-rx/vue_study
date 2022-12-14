import { toLine } from "@/utils"
import { defineComponent, PropType, useAttrs } from "vue"
import * as Icons from '@element-plus/icons-vue'
import './menu.scss'

export default defineComponent({
  props: {
    // 菜单数据
    data: {
      type: Array as PropType<any[]>,
      required: true
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: ''
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false
    },
    // 匹配后端的字段， 在不知道组件将会使用什么字段名的情况，可以使用组件的时候再传值
    // 例如： <rm-menu name='a', icon='b',children='c'></rm-menu>
     // 菜单标题的键名
     name: {
      type: String,
      default: 'name'
    },
    // 菜单标识的键名
    index: {
      type: String,
      default: 'index'
    },
    // 菜单图标的键名
    icon: {
      type: String,
      default: 'icon'
    },
    // 菜单子菜单的键名
    children: {
      type: String,
      default: 'children'
    },
  },
  setup(props, ctx) {
    // 封装一个渲染无限层级菜单的方法
    const renderMenu = (data: any[]) => {
      return data.map((item: any) => {
        // 每个菜单的图标
        // item.icon = `el-icon-${toLine(item.icon!)}`
        item.i = (Icons as any)[item[props.icon!]]
        // 处理 el-sub-menu 插槽
        const slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item[props.name]}</span>
              </>
            )
          }
        }
        // 递归调用
        if (item[props.children!] && item[props.children!].length) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {renderMenu(item[props.children!])}
            </el-sub-menu>
          )
        }
        // 普通的菜单
        return (
          <el-menu-item index={item[props.index]}>
            <item.i />
            <span>{item[props.name]}</span>
          </el-menu-item>
        )
      })
    }
    const attrs = useAttrs()
    return () => {
      return (
        <el-menu class="menu-icon-svg" default-active={props.defaultActive} router={props.router} {...attrs}>
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  }
})