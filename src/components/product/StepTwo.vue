<template>
  <div class="product-create panel">
    <div class="editor"></div>
    <div class="step-footer">
      <el-button @click="prveBtnClick">上一步</el-button>
      <el-button type="primary">保存</el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    prveBtnClick() {
      this.$emit("change-step", 1);
    }
  }
};
</script>
<style lang="less" scoped>
.product-create {
  > .editor {
    margin: 0 auto;
    width: 400px;
    min-height: 300px;
    border: 1px solid #e6e6e6;
  }
}
</style>
