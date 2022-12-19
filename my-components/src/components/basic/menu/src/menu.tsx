import { toLine } from "@/utils"
import { defineComponent, PropType, useAttrs } from "vue"
import { IMenuItem } from "./types"

export default defineComponent({
  props: {
    // 菜单数据
    data: {
      type: Array as PropType<IMenuItem[]>,
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
    }
  },
  setup(props, ctx) {
    // 封装一个渲染无限层级菜单的方法
    const renderMenu = (data: IMenuItem[]) => {
      return data.map((item: IMenuItem) => {
        // 每个菜单的图标
        item.icon = `el-icon-${toLine(item.icon!)}`
        // 处理 el-sub-menu 插槽
        const slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item.name}</span>
              </>
            )
          }
        }
        // 递归调用
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        // 普通的菜单
        return (
          <el-menu-item index={item.index}>
            <item.i />
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }
    const attrs = useAttrs()
    return () => {
      return (
        <el-menu default-active={props.defaultActive} router={props.router} {...attrs}>
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  }
})