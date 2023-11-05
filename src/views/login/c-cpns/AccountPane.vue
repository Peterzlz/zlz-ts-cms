<script setup lang="ts">
import { reactive, ref } from "vue"
import type { FormInstance, FormRules } from "element-plus"
import { ElMessage } from "element-plus"
import useLoginStore from "@/stores/login/login"

// 定义变量类型：帐号和密码
interface RuleForm {
  account: string
  password: string
}

// 获取到el-form组件实例
const ruleFormRef = ref<FormInstance>()
// 定义变量：输入框的帐号和密码
const accountInfo = reactive<RuleForm>({
  account: "",
  password: ""
})

// 定义验证规则
const rules = reactive<FormRules<RuleForm>>({
  account: [
    { required: true, message: "必须输入账号信息~", trigger: "blur" },
    { min: 6, max: 20, message: "请输入6-20位的字母或数字", trigger: "blur" }
  ],
  password: [
    { required: true, message: "必须输入密码信息~", trigger: "blur" },
    { min: 6, max: 20, message: "请输入6-20位的字母或数字", trigger: "blur" }
  ]
})

// 获取登录store对象
const loginStore = useLoginStore()

function loginAction() {
  // console.log(accountInfo.account, accountInfo.password)
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      // 提示登录成功
      ElMessage({
        message: "登录成功！",
        type: "success"
      })

      // 获取输入框的账号和密码
      const account = accountInfo.account
      const password = accountInfo.password
      // 发送异步请求
      loginStore.fetchLoginDataAction(account, password)
    } else {
      // console.log("验证失败！")
      ElMessage.error("登录失败！请输入正确的账号和密码！")
    }
  })
}

// 将子组件的事件暴露出去，给父组件LoginPanel调用
defineExpose({
  loginAction
})
</script>

<template>
  <div class="account-pane">
    <el-form
      label-width="60px"
      ref="ruleFormRef"
      :model="accountInfo"
      :rules="rules"
      class="demo-ruleForm"
      size="large"
      status-icon
    >
      <el-form-item label="账号" prop="account" size="large">
        <el-input v-model="accountInfo.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password" size="large">
        <el-input v-model="accountInfo.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped></style>
