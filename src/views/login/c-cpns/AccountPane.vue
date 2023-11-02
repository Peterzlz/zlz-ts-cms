<script setup lang="ts"></script>

<template>
  <div class="account">
    <el-form label-width="60px">
      <el-form-item label="账号" prop="name" size="large">
        <el-input />
      </el-form-item>
      <el-form-item label="密码" prop="name" size="large">
        <el-input />
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.account {
  color: red;
}
</style>
