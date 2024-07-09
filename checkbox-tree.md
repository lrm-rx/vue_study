# checkbox-tree

### 一. 使用 el-tree

```vue
<template>
  <el-tree
    :data="treeData"
    :props="defaultProps"
    show-checkbox
    node-key="id"
    :default-checked-keys="checkedKeys"
    :default-expanded-keys="expandedKeys"
    @check="handleCheck"
    @node-click="handleNodeClick"
  >
    <template #default="{ node, data }">
      <span class="custom-tree-node">
        <span>{{ data.label }}</span>
        <span v-if="data.children && data.children.length > 0" class="node-count">({{ data.children.length }})</span>
      </span>
    </template>
  </el-tree>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    treeData: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const checkedKeys = ref([]); // 存储所有勾选节点的 id
    const expandedKeys = ref([]); // 存储展开节点的 id
    const defaultProps = {
      children: 'children',
      label: 'label'
    };

    // 递归处理节点，收集所有勾选的项
    const getCheckedNodes = (nodes) => {
      const result = [];
      nodes.forEach(node => {
        if (node.checked) {
          result.push(node);
        }
        if (node.children && node.children.length > 0) {
          result.push(...getCheckedNodes(node.children));
        }
      });
      return result;
    };

    // 处理勾选事件
    const handleCheck = (data, checked, indeterminate) => {
      // 更新 checkedKeys
      if (checked) {
        checkedKeys.value.push(data.id);
      } else {
        checkedKeys.value = checkedKeys.value.filter(key => key !== data.id);
      }
      // 递归处理子节点
      if (data.children && data.children.length > 0) {
        data.children.forEach(child => {
          child.checked = checked;
          handleCheck(child, checked, indeterminate);
        });
      }
    };

    // 处理节点点击事件
    const handleNodeClick = (data) => {
      if (data.children && data.children.length > 0) {
        expandedKeys.value = expandedKeys.value.includes(data.id)
          ? expandedKeys.value.filter(key => key !== data.id)
          : [...expandedKeys.value, data.id];
      }
    };

    // 计算所有勾选节点
    const checkedNodes = computed(() => {
      return getCheckedNodes(props.treeData);
    });

    return {
      checkedKeys,
      expandedKeys,
      defaultProps,
      handleCheck,
      handleNodeClick,
      checkedNodes
    };
  }
};
</script>

<style scoped>
.custom-tree-node {
  display: flex;
  align-items: center;
}

.node-count {
  margin-left: 10px;
  font-size: 12px;
  color: #999;
}
</style>
```

**使用方法:**

1. 导入`el-tree`

```vue
<template>
  <div id="app">
    <el-tree
      :data="treeData"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      :default-checked-keys="checkedKeys"
      :default-expanded-keys="expandedKeys"
      @check="handleCheck"
      @node-click="handleNodeClick"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ data.label }}</span>
          <span v-if="data.children && data.children.length > 0" class="node-count">({{ data.children.length }})</span>
        </span>
      </template>
    </el-tree>
  </div>
</template>
```

2. 在父组件中提供treeData数据:

```vue
<script>
export default {
  data() {
    return {
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            },
            {
              id: 5,
              label: '二级 1-2'
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 6,
              label: '二级 2-1'
            },
            {
              id: 7,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3'
        }
      ]
    };
  }
};
</script>
```

**功能说明：**

- **勾选：** 点击复选框可以勾选节点，同时会递归处理子节点。
- **半勾选：** 当子节点部分被勾选时，父节点会处于半勾选状态。
- **不勾选：** 点击复选框取消勾选节点。
- **收集所有勾选的项：** 使用 `checkedNodes` 计算属性获取所有被勾选的节点。

**注意：**

- 需要在 `el-tree` 组件中使用 `show-checkbox` 属性启用复选框功能。
- 需要使用 `node-key` 属性指定每个节点的唯一标识符。
- 需要使用 `default-checked-keys` 属性设置默认勾选的节点。
- 需要使用 `default-expanded-keys` 属性设置默认展开的节点。
- 可以根据需要自定义 `defaultProps` 属性，指定节点的子节点属性和标签属性。
- 可以根据需要自定义 `handleCheck` 和 `handleNodeClick` 函数，实现其他功能。

**示例：**

```vue
<template>
  <div id="app">
    <el-tree
      :data="treeData"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      :default-checked-keys="checkedKeys"
      :default-expanded-keys="expandedKeys"
      @check="handleCheck"
      @node-click="handleNodeClick"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ data.label }}</span>
          <span v-if="data.children && data.children.length > 0" class="node-count">({{ data.children.length }})</span>
        </span>
      </template>
    </el-tree>
    <div>
      <p>已勾选节点：</p>
      <ul>
        <li v-for="node in checkedNodes" :key="node.id">
          {{ node.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { ElTree } from 'element-plus';

export default {
  components: {
    ElTree,
  },
  data() {
    return {
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            },
            {
              id: 5,
              label: '二级 1-2'
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 6,
              label: '二级 2-1'
            },
            {
              id: 7,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3'
        }
      ],
      checkedKeys: [],
      expandedKeys: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
    };
  },
  computed: {
    checkedNodes() {
      // 递归处理节点，收集所有勾选的项
      const getCheckedNodes = (nodes) => {
        const result = [];
        nodes.forEach(node => {
          if (node.checked) {
            result.push(node);
          }
          if (node.children && node.children.length > 0) {
            result.push(...getCheckedNodes(node.children));
          }
        });
        return result;
      };
      return getCheckedNodes(this.treeData);
    },
  },
  methods: {
    handleCheck(data, checked, indeterminate) {
      // 更新 checkedKeys
      if (checked) {
        this.checkedKeys.push(data.id);
      } else {
        this.checkedKeys = this.checkedKeys.filter(key => key !== data.id);
      }
      // 递归处理子节点
      if (data.children && data.children.length > 0) {
        data.children.forEach(child => {
          child.checked = checked;
          this.handleCheck(child, checked, indeterminate);
        });
      }
    },
    handleNodeClick(data) {
      if (data.children && data.children.length > 0) {
        this.expandedKeys = this.expandedKeys.includes(data.id)
          ? this.expandedKeys.filter(key => key !== data.id)
          : [...this.expandedKeys, data.id];
      }
    },
  },
};
</script>
```

### 方法二: 不使用el-tree

```vue
<template>
  <div>
    <el-checkbox-group v-model="checkedKeys">
      <template v-for="(item, index) in treeData" :key="index">
        <el-checkbox
          :label="item.id"
          :indeterminate="item.indeterminate"
          @change="handleCheck(item, $event)"
        >
          {{ item.label }}
          <template v-if="item.children && item.children.length > 0">
            <el-checkbox-group v-model="item.checkedKeys">
              <tree-item
                :tree-data="item.children"
                :checked-keys="item.checkedKeys"
                @check="handleChildCheck(item)"
              />
            </el-checkbox-group>
          </template>
        </el-checkbox>
      </template>
    </el-checkbox-group>
    <p>已勾选节点：{{ checkedNodes.map(node => node.label).join(', ') }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    treeData: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const checkedKeys = ref([]);
    const checkedNodes = computed(() => {
      const getCheckedNodes = (nodes) => {
        const result = [];
        nodes.forEach(node => {
          if (node.checked) {
            result.push(node);
          }
          if (node.children && node.children.length > 0) {
            result.push(...getCheckedNodes(node.children));
          }
        });
        return result;
      };
      return getCheckedNodes(props.treeData);
    });

    // 初始化树形数据
    const initTreeData = (data) => {
      data.forEach(item => {
        item.checked = false;
        item.indeterminate = false;
        item.checkedKeys = [];
        if (item.children && item.children.length > 0) {
          initTreeData(item.children);
        }
      });
    };

    // 处理勾选事件
    const handleCheck = (item, checked) => {
      item.checked = checked;
      // 递归处理子节点
      if (item.children && item.children.length > 0) {
        item.children.forEach(child => {
          child.checked = checked;
          handleCheck(child, checked);
        });
      }
      // 更新父节点的 indeterminate 状态
      updateIndeterminate(item);
    };

    // 处理子节点勾选事件
    const handleChildCheck = (item) => {
      // 更新父节点的 indeterminate 状态
      updateIndeterminate(item);
      // 更新 checkedKeys
      checkedKeys.value = checkedKeys.value.filter(key => key !== item.id);
      if (item.checked) {
        checkedKeys.value.push(item.id);
      }
    };

    // 更新节点的 indeterminate 状态
    const updateIndeterminate = (item) => {
      if (item.children && item.children.length > 0) {
        let allChecked = true;
        let allUnChecked = true;
        item.children.forEach(child => {
          if (child.checked) {
            allUnChecked = false;
          } else {
            allChecked = false;
          }
        });
        item.indeterminate = !allChecked && !allUnChecked;
      }
    };

    // 初始化树形数据
    initTreeData(props.treeData);

    return {
      checkedKeys,
      checkedNodes,
      handleCheck,
      handleChildCheck
    };
  },
  components: {
    TreeItem: {
      props: ['treeData', 'checkedKeys', 'check'],
      template: `
        <template v-for="(item, index) in treeData" :key="index">
          <el-checkbox
            :label="item.id"
            :indeterminate="item.indeterminate"
            v-model="checkedKeys"
            @change="$emit('check', item)"
          >
            {{ item.label }}
            <template v-if="item.children && item.children.length > 0">
              <el-checkbox-group v-model="item.checkedKeys">
                <tree-item
                  :tree-data="item.children"
                  :checked-keys="item.checkedKeys"
                  @check="$emit('check', item)"
                />
              </el-checkbox-group>
            </template>
          </el-checkbox>
        </template>
      `
    }
  }
};
</script>
```

**使用方法**:

1. 在父组件中提供 treeData 数据:

```vue
<template>
  <div id="app">
    <checkbox-tree :tree-data="treeData"/>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import CheckboxTree from './CheckboxTree.vue';

export default {
  components: {
    CheckboxTree
  },
  data() {
    return {
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            },
            {
              id: 5,
              label: '二级 1-2'
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 6,
              label: '二级 2-1'
            },
            {
              id: 7,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3'
        }
      ]
    };
  }
};
</script>
```

**功能说明：**

- 使用 `el-checkbox-group` 和 `el-checkbox` 组件实现树形结构，每个节点对应一个 `el-checkbox`。
- 递归使用 `TreeItem` 组件实现子节点的显示。
- 使用 `v-model` 指令绑定 `checkedKeys` 属性，实现勾选状态的双向绑定。
- 使用 `indeterminate` 属性控制节点的半勾选状态。
- 使用 `handleCheck` 和 `handleChildCheck` 方法处理勾选事件，并更新 `checkedKeys` 和 `checkedNodes`。

**注意：**

- `treeData` 数据需要包含 `id`、`label` 和 `children` 属性，其中 `children` 属性是可选的，用于表示子节点。
- 需要在 `treeData` 中添加 `checked`、`indeterminate` 和 `checkedKeys` 属性，用于存储节点的勾选状态。
- `checkedKeys` 属性是一个数组，用于存储所有被勾选的节点的 `id`。
- `checkedNodes` 计算属性用于获取所有被勾选的节点。
- 递归实现需要使用 `TreeItem` 组件，并使用 `v-for` 指令遍历子节点。

**代码解释：**

- `initTreeData` 方法用于初始化树形数据，将每个节点的 `checked`、`indeterminate` 和 `checkedKeys` 属性设置为默认值。
- `handleCheck` 方法用于处理顶层节点的勾选事件，递归处理子节点，并更新父节点的 `indeterminate` 状态。
- `handleChildCheck` 方法用于处理子节点的勾选事件，更新父节点的 `indeterminate` 状态，并更新 `checkedKeys`。
- `updateIndeterminate` 方法用于更新节点的 `indeterminate` 状态，根据子节点的勾选状态来判断父节点是否应该处于半勾选状态。

