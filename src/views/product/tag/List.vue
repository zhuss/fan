<template>
  <div class="view tag-list">
    <div class="panel">
      <div class="search-bar flex">
        <div class="flex-1">
          <el-button type="primary">添加分组</el-button>
        </div>
        <div class="search-right">
          <el-input
            prefix-icon="el-icon-search"
            placeholder="搜索关键词"
            v-model="search.keywords"
          ></el-input>
        </div>
      </div>
      <el-table :data="list">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column label="分组名称" prop="name"></el-table-column>
        <el-table-column label="商品数量" prop="number"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: {
        keywords: ""
      },
      list: [
        {
          name: "热卖",
          number: 100
        },
        {
          name: "掌柜推荐",
          number: 200
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.tag-list {
  .search-bar {
    > .search-right {
      width: 300px;
    }
  }
}
</style>
