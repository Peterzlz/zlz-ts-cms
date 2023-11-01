<script setup lang="ts"></script>

<template>
  <div class="app">
    <router-link to="/login">登录</router-link>
    <router-link to="/main">主页面</router-link>

    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.app {
  color: red;
}
</style>
