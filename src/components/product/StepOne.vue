<template>
  <div class="product-create panel">
    <el-form label-width="100px">
      <el-form-item label="商品名称">
        <el-input class="input-large"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <div class="img"></div>
      </el-form-item>
      <el-form-item label="商品类目">
        <el-select v-model="product.category" value-key="id">
          <el-option
            v-for="item in categoryList"
            :label="item.name"
            :value="item"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品分组">
        <el-select v-model="product.tag">
          <el-option label="热卖" value="热卖"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品卖点">
        <el-input class="input-large"></el-input>
      </el-form-item>
      <el-form-item>
        <div style="width:100px;height:1000px;"></div>
      </el-form-item>
    </el-form>
    <div class="step-footer">
      <el-button>保存</el-button>
      <el-button type="primary" @click="nextBtnClick">下一步</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: Object
  },
  data() {
    return {
      categoryList: [
        {
          id: "1",
          name: "美食"
        },
        {
          id: "2",
          name: "美妆"
        },
        {
          id: "3",
          name: "家居"
        }
      ]
    };
  },
  methods: {
    nextBtnClick() {
      this.$emit("change-step", 2);
    }
  }
};
</script>
<style lang="less" scoped>
.product-create {
  margin-bottom: 50px;
  .input-large {
    width: 460px;
  }
  .img {
    width: 100px;
    height: 100px;
    border: 1px solid #e6e6e6;
  }
}
</style>
