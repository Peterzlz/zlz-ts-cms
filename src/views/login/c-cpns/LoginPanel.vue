<script setup lang="ts">
import { ref } from "vue"
// 组件
import AccountPane from "./AccountPane.vue"
import PhonePane from "./PhonePane.vue"

const isRemPwd = ref(false)
</script>

<template>
  <div class="panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">
      <el-tabs type="border-card" stretch>
        <!-- 账号登录面板模块 -->
        <el-tab-pane>
          <template #label>
            <div class="pane">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>

          <account-pane />
        </el-tab-pane>

        <!-- 手机登录面板模块 -->
        <el-tab-pane>
          <template #label>
            <div class="pane">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>

          <phone-pane />
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="password">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>

    <div class="login-btn">
      <el-row class="mb-4">
        <el-button type="primary" size="large" class="btn">立即登录</el-button>
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
