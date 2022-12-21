<template>
  <div>
    <rm-form
      ref="form"
      label-width="100px"
      :options='options'
      @on-change="handleChange"
      @before-upload="handleBeforeUpload"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @before-remove="beforeRemove"
      @on-success="handleSuccess"
      @on-exceed="handleExceed"
     >
      <template #uploadArea>
        <el-button type="primary" size="small">点击上传</el-button>
      </template>
      <template #uploadTip>
        <div style="color:#ccc;font-size:12px; margin-left: 10px;">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">提 交</el-button>
        <el-button @click='resetForm'>重 置</el-button>
      </template>
    </rm-form>
  </div>
</template>

<script lang="ts" setup>
import { FormOptions, FormInstance} from '@/components/basic/form/src/types/types'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'

const form = ref()

interface Scope {
  form: FormInstance,
  model: any,
}

const options: FormOptions[] =[
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max:6,
        message: '用户名在2-6位置之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      clearable: true,
    }
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    rules: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      },
       {
        min: 6,
        max:10,
        message: '密码长度6-10位置之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  {
    type: 'select',
    value: '',
    placeholder: '请选择职位',
    prop: 'role',
    label: '职位',
    attrs:{
      style: {
        width: '100%',
      },
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'blur'
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1'
      },
      {
        type: 'option',
        label: '主管',
        value: '2'
      },
      {
        type: 'option',
        label: '销售',
        value: '3'
      }
    ]
  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'blur'
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2'
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3'
      }
    ]
  },
   {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'blur'
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: '1'
      },
      {
        type: 'radio',
        label: '女',
        value: '2'
      },
      {
        type: 'radio',
        label: '保密',
        value: '3'
      }
    ]
  },
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    uploadAttrs:{
      action: 'https://jsonplaceholder.typicode.com/posts/',
      multiple: true,
      limit:3
    },
    rules: [
      {
        required: true,
        message: '上传图片',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'editor',
    value: '',
    prop: 'desc',
    placeholder: '请输入内容hh',
    label: '描述',
    rules: [
      {
        required: true,
        message: '描述不能为空',
      }
    ]
  }
]

const submitForm = (scope: Scope) => {
  scope.form.validate((valid: boolean) => {
    if(valid){
      console.log(scope.model);
      ElMessage.success('提交成功')
      // resetForm()
    } else {
      ElMessage.error('表单填写错误')
    }
  });
}

const resetForm = () => {
  console.log('重置');
  form.value.resetFields()
}

const handleRemove = (file: any, fileList: any) => {
  console.log('handleRemove')
  console.log(file, fileList)
}

const handlePreview = (file: any) => {
  console.log('handlePreview')
  console.log(file)
}

const beforeRemove = (val: any) => {
  console.log('beforeRemove')
  return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`)
}

const handleExceed = (val: any) => {
  console.log('handleExceed', val)
  ElMessage.warning(
    `The limit is 3, you selected ${val.files.length
    } files this time, add up to ${val.files.length + val.fileList.length} totally`
  )
}

const handleSuccess = (val: any) => {
  console.log('success')
  console.log(val)
}

const handleChange = (val: any) => {
  console.log('change')
  console.log(val)
}

const handleBeforeUpload = (val: any) => {
  console.log('handleBeforeUpload')
  console.log(val)
}

</script>

<style lang="scss" scoped>

</style>