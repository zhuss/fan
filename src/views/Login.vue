<template>
  <div class="page login">
    <el-form class="form">
      <el-form-item>
        <el-input size="large"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="button-large"
          size="large"
          @click="$router.push({ path: '/home' })"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="less" scoped>
.page.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > .form {
    width: 400px;
  }
}
</style>
