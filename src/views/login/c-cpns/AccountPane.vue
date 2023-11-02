<script setup lang="ts">
import { reactive, ref } from "vue"
import type { FormInstance, FormRules } from "element-plus"

interface RuleForm {
  account: string
  password: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  account: "",
  password: ""
})

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
</script>

<template>
  <div class="account">
    <el-form
      label-width="60px"
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
      size="large"
      status-icon
    >
      <el-form-item label="账号" prop="account" size="large">
        <el-input v-model="ruleForm.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password" size="large">
        <el-input v-model="ruleForm.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.account {
  color: red;
}
</style>
