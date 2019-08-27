<template>
  <div class="view product-create">
    <div>
      <el-steps :active="step" simple>
        <el-step title="编辑基本信息" icon="none"></el-step>
        <el-step title="编辑商品详情" icon="none"></el-step>
      </el-steps>
    </div>
    <StepOne
      :product="product"
      @change-step="changeStep"
      v-show="step == 1"
    ></StepOne>
    <StepTwo
      :product="product"
      @change-step="changeStep"
      v-show="step == 2"
    ></StepTwo>
  </div>
</template>
<script>
import StepOne from "../../components/product/StepOne";
import StepTwo from "../../components/product/StepTwo";
export default {
  components: {
    StepOne,
    StepTwo
  },
  data() {
    return {
      step: 1,
      product: {
        name: "",
        covers: [],
        category: null,
        tag: ""
      }
    };
  },
  methods: {
    //切换步骤
    changeStep(step) {
      this.step = step;
    }
  }
};
</script>

<style lang="less" scoped>
.product-create {
}
</style>
