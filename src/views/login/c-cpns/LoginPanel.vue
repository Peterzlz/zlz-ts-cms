<script setup lang="ts">
import { ref } from "vue"
// 组件
import AccountPane from "./AccountPane.vue"
import PhonePane from "./PhonePane.vue"

// 是否记住密码
const isRemPwd = ref(false)
// 当前选中的tab：是account还是phone
const activeName = ref("account")

// 获取子组件实例：account-pane
const accountPaneRef = ref<InstanceType<typeof AccountPane>>()

// 点击 “立即登录” 按钮，触发事件
function loginBtn() {
  if (activeName.value === "account") {
    console.log("正在进行帐号登录")

    // 调用子组件AccountPane的事件loginAction
    accountPaneRef.value?.loginAction()
  } else {
    console.log("正在进行手机登录")
  }
}
</script>

<template>
  <div class="panel">
    <!-- 标题模块 -->
    <h1 class="title">后台管理系统</h1>

    <!-- 面板模块 -->
    <div class="tabs">
      <el-tabs type="border-card" v-model="activeName" stretch>
        <!-- 账号登录面板模块 -->
        <el-tab-pane name="account">
          <template #label>
            <div class="pane">
              <el-icon><UserFilled /></el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>

          <!-- 子组件：account-pane -->
          <account-pane ref="accountPaneRef" />
        </el-tab-pane>

        <!-- 手机登录面板模块 -->
        <el-tab-pane name="phone">
          <template #label>
            <div class="pane">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>

          <!-- 子组件：phone-pane -->
          <phone-pane />
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 记住和忘记密码模块 -->
    <div class="password">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>

    <!-- 登录按钮模块 -->
    <div class="login-btn">
      <el-row class="mb-4">
        <el-button type="primary" size="large" class="btn" @click="loginBtn">立即登录</el-button>
      </el-row>
    </div>
  </div>
</template>

<style lang="less" scoped>
.panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 10px;
  }

  .password {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }

  .login-btn {
    margin-top: 10px;
    .btn {
      width: 100%;
    }
  }
}

.tabs {
  .pane {
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      margin-left: 5px;
    }
  }
}
</style>
